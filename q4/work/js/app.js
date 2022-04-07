'use strict';

$(function() {
  //クラスnav > li　(タブ)をクリックするとイベント発生
  $('.nav li').on('click',function() {
    //nav > liのインデックス番号を取得
    var i = $('.nav li').index(this);
    /*クラスdescription > li (内容)全てに
    is-hiddenのクラスを追加で非表示にさせる*/
    $('.description li').addClass('is-hidden');
    /*description > li (内容)のうち、
    クリックれたタブと同一のインデックス番号を持つli(i)の
    is-hiddenのクラスを削除し、表示させる*/
    $('.description li').eq(i).removeClass('is-hidden');
    /*※上から順に作動しているため、
    addClassとremoveClassを逆に記載すると目的通りに動作しないため注意*/
  });
});