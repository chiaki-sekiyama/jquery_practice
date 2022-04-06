'use strict';

$(function() {
  //アカウント作成ボタンをクリックするとイベント発生
  $('.btn__submit').on('click',function() {
    //コンソールに項目名の文字列を出力
    console.log("名字");
    //id=family__nameに入力された値を出力
    console.log($('#family__name').val());
    //コンソールに項目名の文字列を出力
    console.log("名前");
    //id=given__nameに入力された値を出力
    console.log($('#given__name').val());
    //コンソールに項目名の文字列を出力
    console.log("生年月日");
    /*コンソールにセレクトボックスで選ばれたそれぞれの値を出力
    ＋で文字列も間に挿入し出力
    年の値＋年＋月の値＋月＋日の値＋日　=> ○○年○月○日*/
    console.log($('.year').val() + "年" + $('.month').val() + "月" + $('.day').val() + "日");
    //コンソールに項目名の文字列を出力
    console.log("性別");
    //ラジオボタン名genderでチェックされた値をコンソールに出力
    console.log($('[name="gender"]:checked').val());
    //コンソールに項目名の文字列を出力
    console.log("職業");
    //コンソールにセレクトボックスで選ばれた値を出力
    console.log($('.occupation').val());
    //コンソールに項目名の文字列を出力
    console.log("アカウント名");
    //id=account__nameに入力された値を出力
    console.log($('#account__name').val());
    //コンソールに項目名の文字列を出力
    console.log("メールアドレス");
    //id=emailに入力された値を出力
    console.log($('#email').val());
    //コンソールに項目名の文字列を出力
    console.log("パスワード");
    //id=passwordに入力された値を出力
    console.log($('#password').val());
    //コンソールに項目名の文字列を出力
    console.log("確認用パスワード");
    //id=duplication__passwordに入力された値を出力
    console.log($('#duplication__password').val());
    //コンソールに項目名の文字列を出力
    console.log("住所");
    //id=addressに入力された値を出力
    console.log($('#address').val());
    //コンソールに項目名の文字列を出力
    console.log("電話番号");
    //id=telに入力された値を出力
    console.log($('#tel').val());
    //コンソールに項目名の文字列を出力
    console.log("購読情報");
    /*複数チェックボックス
    eachを利用してそれぞれのチェックボックスがチェックされているか確認*/
    $('[name="subscription"]:checked').each(function() {
      //チェックされた値をコンソールに出力
      console.log($(this).val());
    });
  });
});