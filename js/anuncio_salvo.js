function create_table_array(tb_id, head, data_array, colums, id_div = false, colums_def = []) {
    tabela = $("#" + tb_id)
    tabela_cabecalho = $("#" + tb_id + " thead")
    head_html = head
    util_data = data_array
    tabela_cabecalho.html(head_html)
    //Destrou datable antes de criar
    tabela.DataTable().destroy()


    tabela.DataTable({
        data: util_data,
        columns: colums,
        searching: true,
        renderer: {
            "pageButton": "bootstrap"
        },
        "language": {
            "search": "Pesquisar:",
            "sLengthMenu": "Exibir _MENU_ registros",
            "sInfo": "Exibindo _START_ até _END_ de _TOTAL_ entradas",
            "sPrevius": "Anterior",
            "paginate": {
                "previous": "Anterior",
                "next": "Proximo"
            }
        },
        "aaSorting": [],
        "order": [],
        "drawCallback": function (settings) {
            feather.replace()
        }, "columnDefs": colums_def
    })
    if (id_div != false) {
        change_element("id", id_div, "", "attr", ["hidden", false])
    }
}
vet_prod = [
    
]
h = '\
            <tr>\
                <th>Produto</th>\
                <th>Link</th>\
            </tr>\
            '
c = [
    { data: 'produto' },
    { data: 'link' },
]

if (typeof(meustorage)=="undefined"){
    meustorage = localStorage
    //meustorage.dado = JSON.stringify(vet_prod)

}
function escreve_storage(data){
    out = le_storage()
    out.push(data)
    meustorage.dado = JSON.stringify(out)
}

function le_storage(){
    out = []
    if (meustorage.dado.length == 0){
        return out
    }
    $.each(JSON.parse(meustorage.dado), function(k,v){
        out.push(v)
    })  
    return out
}

create_table_array("tabela_produto_salvo",h,le_storage(),c)

