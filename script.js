function insert(value){
    $(".para").val($(".para").val()+`${value}`);
}

function equl(){
    $(".para").val(`${$(".para").val()}\n
    ${eval($(".para").val())}`);
}

function ope(sign){
    $(".para").val($('.para').val()+sign);
}

function c(){
    $(".para").val("");
}

function del(){
    value = $(".para").val();
    $(".para").val(value.substring(0,value.length-1));
}

