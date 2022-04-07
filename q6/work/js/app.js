'use strict';

$(function() {
  //セレクトボックスを変更したときにイベント発生
  $('.select-box').on('change',function() {
    //セレクトボックスのオプション：valueを取得し、変数に代入
    var select = $('.select-box option:selected').val();
    //li要素それぞれに繰り返し処理をする→each()
    $('.food-list li').each(function() {
      //セレクトボックスで選んだvalueとcategory-typeが一致したとき
      if ($(this).data('category-type') === select) {
        //一致するものは表示
        $(this).show();
        //そのほかは
      } else {
        //非表示(display:none)
        $(this).hide();
      };
      //セレクトボックスで全て(all)を選択したとき
      if (select === 'all') {
        //全てのリスト要素を表示
        $('.food-list li').show();
      };
    });
  });
});