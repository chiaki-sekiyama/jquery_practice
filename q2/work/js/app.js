'use strict';

$(function() {
  /*idは'#~'だが、classを指定する時は'.~'
  オレンジ色のボタン(modal_open_button)をクリックするとイベント発生*/
  $('.modal_open_button').on('click',function() {
    /*modal_winのクラス名を持つdiv要素をフェードインする
    fadeInに関数を指定することで、
    fadeIn()の処理が実行されたあとに関数の実行となる*/
    $('.modal_win').fadeIn()
  });
  //×印のp要素(modal_close_button)をクリックするとイベント発生
  $('.modal_close_button').on('click',function() {
    /*modal_winのクラス名を持つdiv要素をフェードアウトする
    fadeOutでも同様にfadeOutの処理実行後、関数を実行する*/
    $('.modal_win').fadeOut()
  });
});