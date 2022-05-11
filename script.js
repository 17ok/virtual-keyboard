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


const Keyboard = {
   
        wrapper: null,
        textarea: null,
        keyboard: null,
        info: null,
        keyBtns: [],

       
        capsL: false,
        shift: false,
        alt: false,
        value: '',
       language: true,
       textField: '',
    
        

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
        this.info.textContent = ' This Keyboard is created for Windows OS. Language change buttons ShiftL + AltL';


        this.keyboard.appendChild(this.createKeyBtns());
        this.keyBtns = this.keyboard.querySelectorAll('.keyboard-key');
        this.wrapper.appendChild(this.textarea);
        this.wrapper.appendChild(this.keyboard);
        this.wrapper.appendChild(this.info);
        document.body.appendChild(this.wrapper);
        this.textarea.focus();

        this.textarea.value = '';

      
          
    },

    //create key buttons
    createKeyBtns(){
    const fragment = document.createDocumentFragment();
    const textField = document.getElementsByTagName('textarea');
   this.language = this.languageGet();
    let languageArray = this.language ? enLang : ruLang;
      
        languageArray.forEach(key =>{
        
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
                      keyBtn.classList.toggle('keyboard-key-active');
                     if (!this.capsL) {
                        this.capsL = true;
                    } else {
                        this.capsL = false;
                    };
                    this.capsLockToggle();  
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
                keyBtn.addEventListener('mousedown', () =>{
                    keyBtn.classList.add('keyboard-key-active');
                    keyBtn.classList.add('changer');
                    this.shiftUp();
                    this.shift = true;   
                });
                keyBtn.addEventListener('mouseup', () =>
                {setTimeout(() => {
                    keyBtn.classList.remove('keyboard-key-active');
                    keyBtn.classList.remove('changer');
                   this.shiftDown();
                  this.shift = false;
                }, 500)  
                })
                };
                break;
                case 'ArrowUp':
                {
                keyBtn.innerHTML = '&#11205;';
                keyBtn.addEventListener('click', () =>{
                    textField[0].value += key.small;
                 })
               
                };
                break;
               case 'ControlRight':
             {
            keyBtn.textContent = key.small;
            keyBtn.addEventListener('click', () =>{
            textField[0].value += "";
        })
            };
                break;
                case 'ControlLeft':
             {
            keyBtn.textContent = key.small;
            keyBtn.addEventListener('click', () =>{
            textField[0].value += "";
        })
            };
                break;
                case 'MetaLeft':
             {
            keyBtn.textContent = key.small;
            keyBtn.addEventListener('click', () =>{
            textField[0].value += "";
        })
            };
                break;
                case 'AltLeft':
             {
            keyBtn.textContent = key.small;
            keyBtn.addEventListener('mousedown', () =>{
                keyBtn.classList.add('keyboard-key-active');
                keyBtn.classList.add('changer');
                this.alt = true;
                textField[0].value += "";
            });
            keyBtn.addEventListener('mouseup', () =>
            {setTimeout(() => {
                keyBtn.classList.remove('keyboard-key-active');
                keyBtn.classList.remove('changer');
               this.alt = false;
            }, 500)  
            })
            };
                break;
                case 'AltRight':
             {
            keyBtn.textContent = key.small;
            keyBtn.addEventListener('click', () =>{
            textField[0].value += "";
           
        })
            };
                break;
                case 'ShiftRight':
                {
                keyBtn.classList.add('keyboard-key-two');
                keyBtn.textContent = key.small;
                keyBtn.addEventListener('mousedown', () =>{
                    keyBtn.classList.add('keyboard-key-active');
                    this.shiftUp();
                    
                })
                keyBtn.addEventListener('mouseup', () =>
                {setTimeout(() => {
                    keyBtn.classList.remove('keyboard-key-active');
                   this.shiftDown();
                }, 500)  
                })
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
                keyBtn.addEventListener('click', () =>{
                    textField[0].value += key.small;
                 })
                
                 };
                    break;
                case 'ArrowDown':
                {
                keyBtn.innerHTML = '&#11206;';
                keyBtn.addEventListener('click', () =>{
                    textField[0].value += key.small;
                 })
                };
                break;
                case 'ArrowRight':
                {
                    keyBtn.innerHTML = '&#11208;';
                    keyBtn.addEventListener('click', () =>{
                        textField[0].value += key.small;
                     })
                };
                break;
                 default:
                         if (this.capsL) {
                            keyBtn.textContent = key.shift;
                          } else {
                            keyBtn.textContent = key.small;
                          };  
                 
                keyBtn.addEventListener('mousedown', () => {
                    this.languageToggle();
                    textField[0].value += this.capsL||this.shift ? key.shift : key.small;
                });
                 
               break;
                }    
                fragment.appendChild(keyBtn);
       })
       
       return fragment;
    
    

    },
    capsLockToggle() {
        for (const keyBtn of this.keyBtns){
              keyBtn.textContent = this.capsL ? keyBtn.textContent.toUpperCase(): keyBtn.textContent.toLowerCase(); 
        }
    },
    shiftUp() {
        for (const keyBtn of this.keyBtns){
            keyBtn.textContent =  keyBtn.textContent.toUpperCase();
      }
    },
    shiftDown() {
            for (const keyBtn of this.keyBtns){
          keyBtn.textContent =   keyBtn.textContent.toLowerCase();
         }
         

        },
        //languageChange(){
            //const changer = document.querySelectorAll('.changer');


       // },
        
   /* languageChange() {
        if (this.language === true){
            this.language = false;
        } else {
            this.language = false;
        }
    },*/
   languageToggle(){
        if (this.alt && this.shift) {
            this.language = !this.language;
            console.log(this.language);
        }else {
            this.language = this.language;
            console.log(this.language)
            
        }
        
    },
    /*,
    languageSet(){
        window.localStorage.setItem('lang', this.language);
    } ,
    */
   languageGet(){
   if (this.shift === true || this.alt === true){
       return !this.language;
   }      else {
       return this.language;
   }
   }
 
   

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


    
    


/*
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
*/

 
  

   