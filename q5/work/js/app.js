'use strict';

$(function() {
  //dropdwnのリスト(A,B,C,D)にマウスがホバーした時にイベント発生
  $('.dropdwn li').hover(function() {
    /*マウスの乗っているli(this)のdropdwn_menu(ul)を下にスライドさせて表示
    ※ :not(:animated)がないと、
    アニメーション途中でもマウスをホバーした回数分実行が繰り返されるので、
    マウスを離した後も回数分ずっと動いてしまう*/
    /* :not(:animated)はアニメーション中ではない時に処理をうけつけること
    対してstop()は現在実行しているアニメーションをすぐに停止すること、そのあとのイベントで動きを再開する
    $(this)だけだと、.dropdwn li をスライドアップダウンしてしまうので、
    子要素をchildren('ul')にして、
    クリックした.dropdwn liより下の階層のulを指定できる*/
    $(this).children('ul').stop().slideDown()
  //dropdwnのリスト(A,B,C,D)にマウスが乗っていないとき
  }, function() {
    //dropdwn_menu(ul)を上にスライドさせる
    $(this).children('ul').stop().slideUp()
  });
});