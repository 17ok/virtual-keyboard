import * as lang from './lang.js';
let engLang = lang.default;
console.log(engLang);

const Keyboard = {
   
    // mainElements: {
        wrapper: null,
        textarea: null,
        keyboard: null,
        info: null,
        keyBtns: [],


    //create main elements
    createElements(){
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('keyboard-wrapper');

        this.textarea = document.createElement('textarea');
        this.textarea.classList.add('keyboard-textarea');

        this.keyboard = document.createElement('div');
        this.keyboard.classList.add('keyboard-container');

        this.info = document.createElement('div');
        this.info.classList.add('info');
        this.info.innerHtml = `<span> This Keyboard is created for Windows OS</span><span> Language change buttons Shift + Alt </span>`;


        this.keyboard.appendChild(this.createKeyBtns());
        this.keyBtns = this.keyboard.querySelectorAll('keyboard-key');
        this.wrapper.appendChild(this.info);
        this.wrapper.appendChild(this.textarea);
        this.wrapper.appendChild(this.keyboard);
        document.body.appendChild(this.wrapper);
    },

    //create key buttons
    createKeyBtns(){
        const fragment = document.createDocumentFragment();
     /*  // let fragment = new DocumentFragment(),
        const keysEnglish = [ "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace", 
        "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", /* "\"*/ /*,
        "Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
        "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "top", "Shift", "Ctrl", "Win","Alt",
        "space", "Alt", "left", "bottom", "right", "Ctrl"];*/
     //keysEnglish.forEach(key => { 
      engLang.forEach(function (key) {
        const keyBtn = document.createElement('button');
        keyBtn.classList.add('keyboard-key');
       //keyBtn.textContent = key.toLowerCase();
       switch (key.code) {
           case 'Backspace':
               {
                keyBtn.classList.add('keyboard-key-two');
                keyBtn.textContent = key.small;
               };
               break;
            case 'Tab':
                {
                 //keyBtn.classList.add('keyboard-key-two');
                 keyBtn.textContent = key.small;
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
               };
             case 'Enter':
                 {
                keyBtn.classList.add('keyboard-key-two');
                keyBtn.textContent = key.small;
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
       /* case 'ControlLeft':
             {
            keyBtn.textContent = key.small;
            };
                                        break;*/
            case 'Space':
                {
                keyBtn.classList.add('keyboard-key-seven');
                keyBtn.textContent = key.small;
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
                                                   
            default: keyBtn.textContent = key.small;
            break;
       }
       
       
        fragment.appendChild(keyBtn);
       }) 
       
       return fragment;

    }
   
    }
   /* <div class="keyboard-wrapper">
        <textarea class="keyboard-textarea"></textarea>
        <div class="keyboard-container">
            <button class="button keyboard-key keyboard-key-one">a</button>
            <button class="button keyboard-key keyboard-key-two keyboard-key-light">enter</button>
            <button class="button keyboard-key keyboard-key-seven"></button>
        </div>
    </div>  */

window.addEventListener("DOMContentLoaded", function() {Keyboard.createElements()})