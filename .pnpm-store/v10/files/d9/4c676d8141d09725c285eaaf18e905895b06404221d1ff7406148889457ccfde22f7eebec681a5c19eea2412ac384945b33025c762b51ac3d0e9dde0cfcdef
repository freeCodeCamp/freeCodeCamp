language: node_js
node_js:
  - 6
  - 8
  - 10
  - 12
  - stable

before_script:
  - npm install -g typescript
  - tsc -p ./

script: "npm run coveralls"