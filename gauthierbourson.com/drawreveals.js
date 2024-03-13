var paths = document.querySelectorAll("svg path"),
i = 0;

paths.forEach(function(item, index){

    i++;

    var pathLength = item.getTotalLength()
    var speed = 458;

    item.setAttribute("stroke-dasharray", pathLength);
    item.setAttribute("stroke-dashoffset", pathLength);

    if(index == 0){

        item.innerHTML = "<animate id='a" + i + "' attributeName='stroke-dashoffset' begin='0s' dur='" + pathLength/speed + "'s to='0' fill='freeze' />";


    }else{
        item.innerHTML = "<animate id='a" + i + "' attributeName='stroke-dashoffset' begin='a" + (i-1) + ".end' dur='" + pathLength/speed + "'s to='0' fill='freeze' />";
    }

});



/**
 * Create new class for sliding text
 *
 * @params {Element} wrapper - HTML element with text content
 */
 class TextSliderUpper {
    constructor(wrapper) {
      this.wrapper = wrapper;
  
      
      this.delay = 2;
  
      
      this._wrapContent();
    }
  
    _wrapContent() {
      let words = this.wrapper.textContent.split(' ');
      let delay = 0;
      let content = '';
  
      
      words.forEach((word, multiplier) => {
        let word_split = word.split(/([^\x00-\x80]|\w)/g);
        let word_content = '';
  
        
        word_split.forEach((char, index) => {
          delay += this.delay;
  
          word_content += `<span style="animation-delay: ${delay}ms">${char}</span>`;
        });
  
        
        if (content !== '') content += ' ';
  
        
        content += `<span>${word_content}</span>`;
      })
  
      
      this.wrapper.innerHTML = content;
    }
  
    init() {
      this.wrapper.classList.add('show');
    }
  }
  
  
  let headers = document.querySelectorAll('[data-animate]');
  
  
  Array.from(headers).forEach(header => {
    let slideHeader = new TextSliderUpper(header);
  
    
    let delay = header.dataset.delay || 0;
  
    
    setTimeout(() => {
      slideHeader.init();
    }, delay)
  })

