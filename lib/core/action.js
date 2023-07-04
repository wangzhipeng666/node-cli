const inquirer = require('inquirer')
const config = require('../../config')

const myAction = (project, args) => {
  // 命令行的执行逻辑代码
  // console.log(project);
  // console.log(args);
  // express koa egg
  inquirer.prompt([
    {
      type: "list",
      name: "framwork",
      choices: config.framwork,
      message: "请选择你所使用的框架",
    },
  ]).then(answer => {
    console.log(answer);
  })
};

module.exports = myAction;
