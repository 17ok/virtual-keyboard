const Keyboard = {
   
    wrapper: null,
    textarea: null,
    keyboard: null,


    createElements(){
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('keyboard-wrapper');

        this.textarea = document.createElement('textarea');
        this.textarea.classList.add('keyboard-textarea');

        this.keyboard = document.createElement('div');
        this.keyboard.classList.add('keyboard-container');

        document.body.appendChild(this.wrapper);
        this.wrapper.appendChild(this.textarea);
        this.wrapper.appendChild(this.keyboard);
        this.keyboard.appendChild(fragment);
    }

        //create key buttons
_createKeyBtns(){
    const fragment = document.createDocumentFragment();
       // let fragment = new DocumentFragment(),
        const keysEnglish = [ "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace", 
        "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\",
        ,"Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
        "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "top", "Shift", "Ctrl", "Win","Alt",
        "space", "Alt", "left", "bottom", "right", "Ctrl"];
       keysEnglish.forEach(key => function(){
        const keyBtn = document.createElement('button');
        keyBtn.classList.add('keyboard-key');
        //fragment.appendChild(keyBtn);
       }) 
       fragment.appendChild(keyBtn),

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