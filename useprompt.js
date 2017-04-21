/**
 * Created by webohweb on 4/20/17.
 */
'use strict';
var inquirer = require('inquirer');

var questions;
questions = [
    {
        type: 'input',
        name: "name",
        message: "Who are you???"
    },
    {
        type: 'list',
        name: "doingWhat",
        message: "What Are You Doing In My house?",
        choices: [
            "I made you cookies!",
            "No lie dude. Here to rob you",
            "Uh ... this is my house"
        ]
    },
    {
        type: 'checkbox',
        name: "carryingWhat",
        message: "What are you holding?",
        choices: [
            "Your TV",
            "Slice of toast",
            'Butter knife'
        ]
    },
    {
        type: 'confirm',
        name: "canLeave",
        message: "Can you leave now?"
    },
    {
        type: 'password',
        name: "myPassword",
        message: "What is the password?"
    }
];

inquirer.prompt(questions).then(function (answers) {
    console.log(JSON.stringify(answers, null, " "));

    if (answers.myPassword == "MyHouse"){
        console.log("Yep! Stick Around!")
    }else {
        console.log("Wrong Password, Calling the cops now!")
    }
});
