import ruLang from './langru.js';
import enLang from './lang.js';
export default {ruLang, enLang};

const textField = document.querySelector('.keyboard-textarea');


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

      
  // document.addEventListener('mousedown', this.printVirtualKeys());
 // document.addEventListener('mouseup', this.printVirtualKeys());

          
    },

    //create key buttons
    createKeyBtns(){
        const fragment = document.createDocumentFragment();
        let language = enLang;
        language.forEach(function (key) {
             const keyBtn = document.createElement('button');
             keyBtn.classList.add('keyboard-key');
             keyBtn.setAttribute('data-type', key.code);
             keyBtn.addEventListener('click', () => {keyBtn.classList.toggle('keyboard-key-active')});
             switch (key.code) {
                 case 'Backspace':
                     {
                          keyBtn.classList.add('keyboard-key-two');
                          keyBtn.textContent = key.small;
                         keyBtn.addEventListener('click', () => {
                         textField.textContent = textField.textContent.substring(0, textField.textContent-1);
                       })
                    }
                        break;
                case 'Tab':
                 {
                 keyBtn.textContent = key.small;
                 //textField.textContent = textField.textContent + "    ";
                 };
                break;
                case 'Delete':
                {
                keyBtn.textContent = key.small;   
                };
                break;
                case 'CapsLock':
                    {
                   keyBtn.classList.add('keyboard-key-two');
                   keyBtn.textContent = key.small;
                  keyBtn.addEventListener('click', () =>{
                      this.capsLockToggle();
                      keyBtn.classList.toggle(this.values.capsLock);
                  })
                };
               break;
                case 'Enter':
                 {
                keyBtn.classList.add('keyboard-key-two');
                keyBtn.textContent = key.small;
               // keyBtn.addEventListener('click', () =>{
                    //textField.textContent = textField.textContent + "\n";
              //  })

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
              //  keyBtn.addEventListener('click', () =>{
                   // textField.textContent = textField.textContent + " ";
               // })
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
                
                 
                 
               break;
                }    
                fragment.appendChild(keyBtn);
       })
       
       return fragment;
    

    },
    capsLockToggle() {
        this.values.capsLock = !this.values.capsLock;
        const buttonsArr = this.keyboard.querySelectorAll('.keyboard-key');
        console.log(buttonsArr);
        for (const element of buttonsArr){
            if (element.childElementCount === 0) {
                element.textContent = this.values.capsLock ? element.textContent.toUpperCase() : element.textContent.toLowerCase();
            }
        }
    },

};

window.addEventListener("DOMContentLoaded", function() {Keyboard.createElements();});
window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);

function keydown(event){
    const keyactive = document.querySelector(`[data-type =${event.code}]`);
    if (keyactive) {
        //console.log(keyactive);
        keyactive.classList.add('keyboard-key-active');
    }
};
function keyup(event){
    const keyactive = document.querySelector(`[data-type =${event.code}]`);
    if (keyactive) {
        //console.log(keyactive);
        keyactive.classList.remove('keyboard-key-active');
    }
};

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


//textField.focus();




   /* printKeys(event) {
     // let textField = document.querySelector('.keyboard-textarea');
     //if (event.stopPropagation) event.stopPropagation;
          const {code, type} = event;
          console.log(event);
          const keyObject = this.keyBtns.find((key) => key.code === code);
          if (!keyObject) return;
          this.textField.focus();
          if (type.match(/keydown|mousedown/)) {
              if(type.match(/key/)) event.preventDefault();
Keyboard.keyBtn.classList.add('.keyboard-key-active');
          } else if (type.match(/keyup|mouseup/)){
              Keyboard.keyBtn.classList.remove('.keyboard-key-active');
          }
      }*/
   
      
    

 //   };
 /*  
const keyboardButtons = document.querySelectorAll('.keyboard-key');
function printVirtualKeys() {
        keyboardButtons.forEach(element => {
                element.addEventListener('click', function(event)
                {
                    console.log('click');
                    textField.textContent += element.textContent;
                })
            
        })
    };
    printVirtualKeys();
*/

    /*capsLockToggle() {
        if (this.capsLock === 'active') {
        this.capsLock = '';
        caseToggle();
    } else {
    this.capsLock ='active';
    caseToggle();
    }
    },
    caseToggle() {
        for (const element of this.keyBtns) {
        if (this.capsLock === 'active') {
                this.element.textContent = key.shift; 
            } else {
                this.element.textContent = key.small;
            }
        }
    }*/

 
   /* function print(event) {
        let onkeydown = event.code;
        let textField = document.querySelector('.keyboard-textarea');
        engLang.forEach(elem => {
            if (elem.code === onkeydown)
            {
                if (elem.code === 'Enter'){
                    textField.textContent += '\n';
                } else {
                    textField.textContent = elem.key.small;
                }


            }
           


        })

    }

   addEventListener('keydown', print)*/

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
