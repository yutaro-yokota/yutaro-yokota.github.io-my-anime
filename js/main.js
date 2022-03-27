'use strict';

// モーダル
{
  const modal1 = document.querySelector('.modal1');
  const modal2 = document.querySelector('.modal2');
  const modal3 = document.querySelector('.modal3');
  const modal4 = document.querySelector('.modal4');
  
  const mask = document.querySelector('#mask');
  const modal1_a = document.querySelector('.modal_area1');
  const modal2_a = document.querySelector('.modal_area2');
  const modal3_a = document.querySelector('.modal_area3');
  const modal4_a = document.querySelector('.modal_area4');
  const close = document.querySelectorAll('.close');
  
  
  modal1.addEventListener('click',() => {
    mask.classList.toggle('open');
    modal1_a.classList.toggle('open');
  });
  modal2.addEventListener('click',() => {
    mask.classList.toggle('open');
    modal2_a.classList.toggle('open');
  });
  modal3.addEventListener('click',() => {
    mask.classList.toggle('open');
    modal3_a.classList.toggle('open');
  });
  modal4.addEventListener('click',() => {
    mask.classList.toggle('open');
    modal4_a.classList.toggle('open');
  });
  
  
  
  close.forEach(closes => {
    closes.addEventListener('click',() => {
      mask.classList.remove('open');
      modal1_a.classList.remove('open');
      modal2_a.classList.remove('open');
      modal3_a.classList.remove('open');
      modal4_a.classList.remove('open');
    });
  });
}

// ハンバーガーメニュー
{
  const menu = document.querySelector('.material_menu');
  const close = document.querySelector('.material_close');
  const overlay = document.querySelector('.overlay');
  menu.addEventListener('click',() => {
    menu.classList.toggle('none');
    overlay.classList.toggle('open');
  });
  close.addEventListener('click',() => {
    menu.click();
  });
}

// アコーディオンメニュー
{
  const dt = document.querySelector('dt');
  const dd = document.querySelector('dd');

  dt.addEventListener('click', () => {
    dd.classList.toggle('open');
    dt.classList.toggle('open');
  });

  $(function(){
    $('#content_menu1').click(function(){
      $('#content_list1').toggle();
    });
  });
  $(function(){
    $('#content_menu2').click(function(){
      $('#content_list2').toggle();
    });
  });
  $(function(){
    $('#content_menu3').click(function(){
      $('#content_list3').toggle();
    });
  });
  $(function(){
    $('#content_menu4').click(function(){
      $('#content_list4').toggle();
    });
  });
}