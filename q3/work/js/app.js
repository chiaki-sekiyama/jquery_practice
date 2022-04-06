'use strict';

$(function() {
  //ハンバーガーメニューボタンをクリックするとイベント発生
  $('.drawer_button').on('click',function() {
    /*背景の灰色がフェードイン
    fadeInだと、開くのみのイベントになってしまうため、
    表示・非表示を繰り返しできるToggleを利用*/
    $('.drawer_bg').fadeToggle();
    /*ハンバーガーメニューボタンにactiveのクラスを追加
    (fadeToggleを利用しているため、つける、外すの繰り返しができる)*/
    $('.drawer_button').toggleClass('active');
    //navのメニュー部分を表示したいので、openのクラスを追加
    $('.drawer_nav_wrapper').toggleClass('open');
    //変数に文字列を代入
    const result = "メニューを表示・非表示に変更しました";
    //コンソールに変数の文字列を出力
    console.log(result);
  });
  //背景(orボタン)をクリックするとイベント発生
  $('.drawer_bg').on('click',function() {
    //背景の灰色がフェードアウト
    $('.drawer_bg').fadeToggle();
    //ハンバーガーメニューボタンからactiveのクラスを削除
    $('.drawer_button').toggleClass('active');
    //navからopenのクラスを削除
    $('.drawer_nav_wrapper').toggleClass('open');
  });
});