'use strict';

$(function() {
  //dropdwnのリスト(A,B,C,D)にマウスがホバーした時にイベント発生
  $('.dropdwn li').hover(function() {
    /*マウスの乗っているli(this)のdropdwn_menu(ul)を下にスライドさせて表示
    ※ :not(:animated)がないと、
    アニメーション途中でもマウスをホバーした回数分実行が繰り返されるので、
    マウスを離した後も回数分ずっと動いてしまう*/
    $('ul:not(:animated)', this).slideDown(function() {
      /*変数に文字列を代入
      slideDownのイベントとして入れることで動きが終わった後に表示させる*/
      const result = "マウスがホバーしました";
      //コンソールに変数の文字列を出力
      console.log(result);
    });
  //dropdwnのリスト(A,B,C,D)にマウスが乗っていないとき
  }, function() {
    //dropdwn_menu(ul)を上にスライドさせる
    $('ul.dropdwn_menu', this).slideUp(function() {
      //変数に文字列を代入
      const result = "マウスが離れました";
      //コンソールに変数の文字列を出力
      console.log(result);
    });
  });
});