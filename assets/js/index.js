function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  
  function incr(){
      var value = parseInt(document.getElementById('sellAmount').value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      document.getElementById('sellAmount').value = value;
  }
  function incr2(){
      var value = parseInt(document.getElementById('buyAmount').value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      document.getElementById('buyAmount').value = value;
  }
  function dec(){
      var value = parseInt(document.getElementById('sellAmount').value, 10);
      value = isNaN(value) ? 0 : value;
      if(value > 0){
  
          value--;
      }
      document.getElementById('sellAmount').value = value;
  }
  function dec2(){
      var value = parseInt(document.getElementById('buyAmount').value, 10);
      value = isNaN(value) ? 0 : value;
      if(value > 0){
      value--;
      }
      document.getElementById('buyAmount').value = value;
  }

  $("#connect,#connectMobile").click(function(){
    console.log("working")
  });
  $("#switch,#switchMobile").click(function(){
    console.log("switch button working")
  });

  // tabs
  const tabs2 = document.querySelectorAll(".tab2");
const tabContent2 = document.querySelectorAll(".tab-content2");

let tabNo2 = 0;
let contentNo2 = 0;

tabs2.forEach((tab2) => {
  tab2.dataset.id = tabNo2;
  tabNo2++;
  tab2.addEventListener("click", function () {
    tabs2.forEach((tab2) => {
      tab2.classList.remove("active2");
      tab2.classList.add("non-active2");
    });
    this.classList.remove("non-active2");
    this.classList.add("active2");
    tabContent2.forEach((content) => {
      content.classList.add("hidden2");
      if (content.dataset.id === tab2.dataset.id) {
          content.classList.remove("hidden2");
      }
    });
  });
});

tabContent2.forEach((content) => {
  content.dataset.id = contentNo2;
  contentNo2++;
});

//////
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

function displayUpperModal(){
  document.getElementById('dropmen').classList.toggle("hiddend")
  addList()
  console.log("hmm")
}

///

// LIBRARY

function cssTransform(degs) {
  return "rotate(" + degs + "deg) translate(0, -25%)";
}

var Pie = function(el, options) {
  options = options || {};
  options.color = options.color || 'white';
  options.backgroundColor = options.backgroundColor || 'black';
  
  this.el = el;
  this.inner = this.el.querySelector('.pie_inner');
  this.blocker1 = this.el.querySelector('.pie_blocker-1');
  this.blocker2 = this.el.querySelector('.pie_blocker-2');
  this.pieLeft = this.el.querySelector('.pie_circle-left');
  this.pieRight = this.el.querySelector('.pie_circle-right');

  this.pieLeft.style.backgroundColor = options.color;
  this.pieRight.style.backgroundColor = options.color;
  
  this.blocker1.style.backgroundColor = options.backgroundColor;
  this.blocker2.style.backgroundColor = options.backgroundColor;
  
  if (options.mask) {
    this.addMask();
  }
};
    
Pie.prototype.set = function(percentage) {
  this.percentage = percentage
  this.degs = 360 * this.percentage;
  
  var degs1 = this.degs > 180 ? 180 : this.degs;
  var degs2 = this.degs > 180 ? this.degs - 180 : 0;
  
  this.blocker1.style.webkitTransform = cssTransform(degs1);
  this.blocker2.style.webkitTransform = cssTransform(degs2);
};

Pie.prototype.addMask = function () {
  this.inner.style.webkitMask = "-webkit-radial-gradient(center, white 0%, white 70%, transparent 71%, transparent 100%) no-repeat no-repeat 50% 50%";
}

// DEMO

var pie = new Pie(document.querySelector('.pie'), {
  mask: true,
  color: 'white',
  backgroundColor: '#444'
});
  
var percent = 0; 

function incrementPie() {
  if (percent >= 100) percent = 0;
  pie.set(percent++ * 0.01);
}

setInterval(incrementPie, 60);

function copyTextDash() {
  // Get the text field
  var copyTextDa = document.getElementById("copyValueDash");
  
  // Select the text field
  copyTextDa.select();
  copyTextDa.setSelectionRange(0, 99999); // For mobile devices
  
   // Copy the text inside the text field
  navigator.clipboard.writeText(copyTextDa.value);
  
  // Alert the copied text
  swal("Copy", "success", {
    button: false});
  // alert("Copied Referral: " + copyText.value);
  swal({
    icon: "success",
    button: false,
    text: "COPY REFERRAL",
    timer: 1000,
    });
  
}