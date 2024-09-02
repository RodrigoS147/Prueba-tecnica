const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.use(cors());

const directoryPath = path.join(__dirname, '../data');

function loadJsonFiles() {
  const files = fs.readdirSync(directoryPath).filter(file => file.endsWith('.json'));
  return files.map(file => ({
    file: path.join(directoryPath, file),
    content: JSON.parse(fs.readFileSync(path.join(directoryPath, file), 'utf-8'))
  }));
}

function processFiles(data) {
  const moduleUsers = {};

  data.forEach(({ file, content }) => {
    Object.entries(content.provider).forEach(([moduleType, moduleName]) => {
      if (!moduleUsers[moduleType]) moduleUsers[moduleType] = {};
      if (!moduleUsers[moduleType][moduleName]) moduleUsers[moduleType][moduleName] = [];
      moduleUsers[moduleType][moduleName].push(`User ${path.basename(file).match(/\d+/)[0]}`);
    });
  });

  return moduleUsers;
}

function getCombinations(array, size) {
  function p(t, i) {
      if (t.length === size) {
          result.push(t);
          return;
      }
      if (i + 1 > array.length) {
          return;
      }
      p(t.concat(array[i]), i + 1);
      p(t, i + 1);
  }
  let result = [];
  p([], 0);
  return result;
}

function findMinimumCover(moduleUsers) {
  const allModules = new Set(Object.values(moduleUsers).flatMap(modules => Object.keys(modules)));
  const allFiles = Object.values(moduleUsers).flatMap(modules => 
      Object.values(modules).flatMap(fileList => fileList)
  );

  const fileNames = allFiles.map(file => path.basename(file));

  function coverModules(files) {
      const coveredModules = new Set();
      files.forEach(file => {
          Object.entries(moduleUsers).forEach(([moduleType, modules]) => {
              Object.entries(modules).forEach(([module, fileList]) => {
                  const fileListNames = fileList.map(f => path.basename(f));
                  if (fileListNames.includes(file)) {
                      coveredModules.add(module);
                  }
              });
          });
      });
      return Array.from(coveredModules);
  }

  function areSetsEqual(setA, setB) {
    if (setA.size !== setB.size) return false;
    for (let item of setA) {
        if (!setB.has(item)) return false;
    }
    return true;
  }

  for (let r = 1; r <= fileNames.length; r++) {
      const combinations = getCombinations(fileNames, r);
      for (const combo of combinations) {
          if (areSetsEqual(new Set(coverModules(combo)), allModules)) {
              return combo;
          }
      }
  }

  return [];
}

app.get('/', (req, res) => {
  res.send('Estas en el servidor backend. Las rutas disponibles son /parteA y /parteB');
});

app.get('/parteA', (req, res) => {
  const data = loadJsonFiles();
  const moduleUsers = processFiles(data);
  res.json(moduleUsers);
});

app.get('/parteB', (req, res) => {
  const data = loadJsonFiles();
  const moduleUsers = processFiles(data);
  const minCover = findMinimumCover(moduleUsers);
  res.json(minCover);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
