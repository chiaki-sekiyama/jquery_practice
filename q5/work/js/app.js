'use strict';

$(function() {
  //dropdwnのリスト(A,B,C,D)にマウスがホバーした時にイベント発生
  $('.dropdwn li').hover(function() {
    /*マウスの乗っているli(this)のdropdwn_menu(ul)を下にスライドさせて表示
    ※ :not(:animated)がないと、
    アニメーション途中でもマウスをホバーした回数分実行が繰り返されるので、
    マウスを離した後も回数分ずっと動いてしまう*/
    $('ul:not(:animated)', this).stop().slideDown()
  //dropdwnのリスト(A,B,C,D)にマウスが乗っていないとき
  }, function() {
    //dropdwn_menu(ul)を上にスライドさせる
    $('ul.dropdwn_menu', this).stop().slideUp()
  });
});