'use strict';

//Q1

//
$(function() {
  //読み込み時にid=q1の cssの文字を緑に変更
  $('#q1').css('color','green');
  //変数に文字列を代入
  const result = "文字色が緑に変わりました";
  //コンソールに変数の文字列を出力
  console.log(result);
  //id=q2をクリックしたときにイベント発生
  $('#q2').on('click',function() {
    //背景色を赤からピンクに変更、this→要素指定#q2
    $(this).css('background','pink');
    //変数に文字列を代入
    const result = "背景色がピンクに変わりました";
    //コンソールに変数の文字列を出力
    console.log(result);
  });
  //id=q3をクリックしたときにイベント発生
  $('#q3').on('click',function() {
    //3000ミリ秒でフェードアウト、this→要素指定#q3
    $(this).fadeOut(3000);
    //変数に文字列を代入
    const result = "フェードアウトしました"
    //コンソールに変数の文字列を出力
    console.log(result);
  });
  //id=q4をクリックしたときにイベント発生
  $('#q4').on('click',function() {
    //stle.cssの26行目largeのクラスを追加、this→要素指定#q4
    $(this).addClass('large');
    //変数に文字列を代入
    const result = "largeを追加しボタンを大きくしました";
    //コンソールに変数の文字列を出力
    console.log(result);
  });
  //id=q5をクリックしたときにイベント発生
  $('#q5').on('click',function() {
    //append,prepend,after,beforeでそれぞれDOMを挿入、this→要素指定#q5
    $(this).prepend('DOMの中の前').append('DOMの中の後').before('DOMの前').after('DOMの後');
    //変数に文字列を代入
    const result = "DOMを挿入しました";
    //コンソールに変数の文字列を出力
    console.log(result);
  });
  //id=q6をクリックしたときにイベント発生
  $('#q6').on('click',function() {
    //animate(パラメータ,速度,イージング,コールバック)で動きを指定、this→要素指定#q6
    $(this).animate({
      //margin-top:100pxを指定
      'marginTop': '100px',
      //margin-left:100pxを指定
      'marginLeft': '100px'
      //速度を指定、2000ミリ秒かけて動く
    },2000);
    //変数に文字列を代入
    const result = "斜め右下に移動しました";
    //コンソールに変数の文字列を出力
    console.log(result);
  });
  //id=q7をクリックしたときにイベント発生
  $('#q7').on('click',function(){
    //コンソールに出力、this→要素指定#q7、''なしのq7でもノード出力可能
    console.log(this);
  });
  //id=q8に
  $('#q8')
  //マウスがホバーしたときにイベント発生
  .mouseenter(function() {
    //style.cssのlargeのクラスを追加
    $(this).addClass('large');
    //変数に文字列を代入
    const result = "q8にホバーしました";
    //コンソールに変数の文字列を出力
    console.log(result);
  })
  // ; をつけてないので、id=q8の指定のまま！マウスが離れた時にイベント発生
  .mouseleave(function() {
    //style.cssのlargeのクラスを削除
    $(this).removeClass('large');
    //変数に文字列を代入
    const result = "q8から離れました";
    //コンソールに変数の文字列を出力
    console.log(result);
  });
  //#q9 > liをクリックしたときにイベント発生
  $('#q9 li').on('click',function() {
  //index番号を取得※thisにすることで、ひとつひとつのliが反応
  var index = $('li').index(this);
  //取得したindex番号をalertで表示
  alert(index);
  //変数に文字列を代入
  const result = "アラートを表示しました";
  //コンソールに変数の文字列を出力
  console.log(result);
  });
  //#q10 > liをクリックしたときにイベント発生
  $('#q10 li').on('click',function() {
    //#q10 > liのインデックス番号を取得、iに代入
    var i = $('#q10 li').index(this);
    //#q11 > liの、iのインデックス番号に対応するliにstyle.css55行目のlarge-textクラスを追加
    $('#q11 li').eq(i).addClass('large-text');
    //変数に文字列を代入
    const result = "q10がクリックされたのでq11が大きくなりました"
    //コンソールに変数の文字列を出力
    console.log(result);
  });
});