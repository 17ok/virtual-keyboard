import ruLang from './langru.js';
import enLang from './lang.js';
export default {ruLang, enLang};




/*
const Keybuttons = {
    constructor({small, shift, code}) {
        this.small = small;
        this.shift = shift;
        this.code = code;
    },
}
*/

//import * as lang from './lang.js';
//let engLang = lang.default;
//console.log(engLang);
//const textField = document.querySelector('.keyboard-textarea');

const Keyboard = {
   
    // mainElements
        wrapper: null,
        textarea: null,
        keyboard: null,
        info: null,
        keyBtns: [],

       values:{
        capsLock: false,
        value: '',
       // language: enLang,
       textField: ''
       },
        

    //create main elements with major functionality
    createElements(){
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('keyboard-wrapper');

        this.textarea = document.createElement('textarea');
        this.textarea.classList.add('keyboard-textarea');
   

        this.keyboard = document.createElement('div');
        this.keyboard.classList.add('keyboard-container');

        this.info = document.createElement('div');
        this.info.classList.add('info');
        this.info.textContent = ' This Keyboard is created for Windows OS. Language change buttons Shift + Alt';


        this.keyboard.appendChild(this.createKeyBtns());
        this.keyBtns = this.keyboard.querySelectorAll('.keyboard-key');
        this.wrapper.appendChild(this.textarea);
        this.wrapper.appendChild(this.keyboard);
        this.wrapper.appendChild(this.info);
        document.body.appendChild(this.wrapper);
        this.textarea.focus();

        this.textarea.value = '';

      //  this.textarea.addEventListener('focus', () => {
     //       this.textarea.value += this.values.value;
      //  })
          
    },

    //create key buttons
    createKeyBtns(){
        const fragment = document.createDocumentFragment();
       let language = enLang;
        const textField = document.getElementsByTagName('textarea');
        language.forEach(function (key) {
             const keyBtn = document.createElement('button');
             keyBtn.classList.add('keyboard-key');
             keyBtn.setAttribute('data-type', key.code);
             keyBtn.addEventListener('mousedown', () => { keyBtn.classList.add('keyboard-key-activated')});
             keyBtn.addEventListener('mouseup', () => {keyBtn.classList.remove('keyboard-key-activated')});
             keyBtn.addEventListener('mouseout', () => {keyBtn.classList.remove('keyboard-key-activated')});
             switch (key.code) {
                 case 'Backspace':
                     {
                          keyBtn.classList.add('keyboard-key-two');
                          keyBtn.textContent = key.small;
                         keyBtn.addEventListener('click', () => {
                         textField[0].value = textField[0].value.substring(0, textField[0].value.length-1);
                       })
                    }
                        break;
                case 'Tab':
                 {
                 keyBtn.textContent = key.small;
                 keyBtn.addEventListener('click', () =>{
                    textField[0].value += "    ";
                 })
                 };
                break;
                case 'Delete':
                {
                keyBtn.textContent = key.small;  
                keyBtn.addEventListener('click', () =>{
                    textField[0].value = " ";
                 }) 
                };
                break;
                case 'CapsLock':
                    {
                   keyBtn.classList.add('keyboard-key-two');
                   keyBtn.textContent = key.small;
                  keyBtn.addEventListener('click', () =>{
                      this.capsLockToggle();
                      this.values.capsLock = !this.values.capsLock;
                  })
                };
               break;
                case 'Enter':
                 {
                keyBtn.classList.add('keyboard-key-two');
                keyBtn.textContent = key.small;
               keyBtn.addEventListener('click', () =>{
                textField[0].value +=  "\n";
               })

            };
                break;
                case 'ShiftLeft':
                {
                keyBtn.classList.add('keyboard-key-two');
                keyBtn.textContent = key.small;
                };
                break;
                case 'ArrowUp':
                {
                keyBtn.innerHTML = '&#11205;';
               
                };
                break;
                case 'ShiftRight':
                {
                keyBtn.classList.add('keyboard-key-two');
                keyBtn.textContent = key.small;
                };
                break;
        case 'ControlLeft':
             {
            keyBtn.textContent = key.small;
            };
                break;
                 case 'Space':
                {
                keyBtn.classList.add('keyboard-key-seven');
                keyBtn.textContent = key.small;
              keyBtn.addEventListener('click', () =>{
                   textField[0].value += " ";
                })
                };
                break;
                case 'ArrowLeft':
                {
                keyBtn.innerHTML = '&#11207;';
                 };
                    break;
                case 'ArrowDown':
                {
                keyBtn.innerHTML = '&#11206;';
                };
                break;
                case 'ArrowRight':
                {
                    keyBtn.innerHTML = '&#11208;';
                };
                break;
                 default: 
                  
                 keyBtn.textContent = key.small;
                keyBtn.addEventListener('mousedown', () => {
                    textField[0].value += key.small;
                });
                 
                 
               break;
                }    
                fragment.appendChild(keyBtn);
       })
       
       return fragment;
    

    },
    capsLockToggle() {
       // this.values.capsLock = !this.values.capsLock;
        const buttonsArr = this.keyboard.querySelectorAll('.keyboard-key');
        console.log(buttonsArr);
        for (const element of buttonsArr){
         {
                //element.textContent = 
                this.values.capsLock ? element.textContent.toUpperCase() : element.textContent.toLowerCase();
            }
        }
    },

};

window.addEventListener("DOMContentLoaded", function() {Keyboard.createElements();});
window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);
const keyboardButtons = document.getElementsByTagName('button');
const keyboard = document.querySelector('.keyboard-container');


function keydown(event){
    const keyactive = document.querySelector(`[data-type =${event.code}]`);
    if (keyactive) {
        keyactive.classList.add('keyboard-key-active');
    }
};
function keyup(event){
    const keyactive = document.querySelector(`[data-type =${event.code}]`);
    if (keyactive) {
        keyactive.classList.remove('keyboard-key-active');
    }
};

const textField = document.getElementsByTagName('textarea');
console.log(textField);
console.log(textField.data);


function setLanguage(language){
    window.localStorage.setItem('language', language)

};

function getLanguage(){
    const language = window.localStorage.getItem('language');
    if (language) return language;
    setLanguage('enLang');
    return 'enLang';
};

function changeLanguage() {
    let language = getLanguage();
    if (language === 'enLang'){
        this.setLanguage('ruLang');
        language = 'ruLang';
    } else {
        this.setLanguage('enLang');
        language = 'ruLang';
    }

    }
/*
function capsLockchange(){
    let capsBtn = document.querySelector(`[data-type =${CapsLock}]`);
    if (capsBtn.classList.contains('keyboard-key-active'||'keyboard-key-activated'){
        function() {Keyboard.createKeyBtns();}
    } )
}
*/


    
 /*
function print(event) {
       const keyactive = document.querySelector(`[data-type =${event.code}]`);
        let onkeydown = event.code;
        let textField = document.getElementsByTagName('textarea');
        engLang.forEach(elem => {
            if (elem.code === onkeydown)
            {
                if (elem.[data-type =${event.code}]=== 'Enter'){
                    textField.textContent += '\n';
                } else {
                    textField.textContent = elem.key.small;
                }


            }
           


        })

    }

 */

  /* function print(event) {
        let down = event.keyCode;
        let textField = document.querySelector('.keyboard-textarea');
        engLang.forEach(elem => {
            console.log(elem);
            if (elem.code === down)
            {
                if (elem.code === 'Enter'){
                    textField.textContent += '\n';
                } else {
                    textField.textContent = elem.key.small;
                }
                return textField;
            }

            })
           


        }
       /* document.querySelector('.keyboard-textarea').onkeypress = function(event) {
            textField.textContent += key.small;

        }*/
