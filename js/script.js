$(document).ready(function () {
     
    $('#verTodos').click(function(){
      var string = '';
      $.each(instituicao, function(index,i){        
        if(i != undefined){          
          var classe = 'class = "inst"';
          
          string = string + '<p '+classe+'><a href="verInstituicao.html?id='+i.ident+'">'+i.nome+'</a>';
          if(i.altitude != ''){
            string = string + '<a href="mapa.html?id='+i.ident+'" class="link e5">'+banco[idioma]['e5']+'</a>';
          }
          string = string + '</p>';
          
          
        }
      });


      $('#entidades').html(string);

    

    });

    $('#verLegenda').click(function(){
      var string = '<img src="images/Agências internacionais.png">'+banco[idioma]['option1']+'<img src="images/Assistência jurídica.png">'+banco[idioma]['option2']+'  <img src="images/Utilidade Pública.png">'+banco[idioma]['option11']+'<br/>  <img src="images/Aulas de Português.png">'+banco[idioma]['option3']+' <img src="images/Centros de Apoio, Entidades e Instituições Beneficentes.png">'+banco[idioma]['option4']+'<br/> <img src="images/Comunidades e Sociedades.png">'+banco[idioma]['option5']+'<img src="images/Consulados e Embaixadas.png">'+banco[idioma]['option6']+'<br/> <img src="images/Instituições de Ensino.png">'+banco[idioma]['option7']+' <img src="images/Oportunidade de emprego.png">'+banco[idioma]['option8']+'<br/> <img src="images/Órgãos governamentais.png">'+banco[idioma]['option9']+' <img src="images/Templos Religiosos.png">'+banco[idioma]['option10']+'<br/>';
    $('#verLegenda').hide();
    $('#legenda').html(string);


    });


    $('#e3').click(function(){
      categoria = $('#categorias').val();
      estado = $('#estado').val();
           
      if (categoria != '' && estado != '') {
        
          var string = '';
          $.each(instituicao, function(index,i){        
            if(i != undefined){          
              var classe = 'class = "inst"';
              if(i.aprovacao == '1' && i.estado == estado && i.categoria == categoria){
                string = string + '<p '+classe+'><a href="verInstituicao.html?id='+i.ident+'">'+i.nome+'</a>';
                if(i.altitude != ''){
                  string = string + '<a href="mapa.html?id='+i.ident+'" class="link e5">'+banco[idioma]['e5']+'</a>';
                }
                string = string + '</p>';
              }             
            }
          });

          $('#entidades').html(string);

      }else if(categoria != "" && estado == ""){
          var string = '';
          $.each(instituicao, function(index,i){        
            if(i != undefined){          
              var classe = 'class = "inst"';
              if(i.aprovacao == '1' && i.categoria == categoria){
                string = string + '<p '+classe+'><a href="verInstituicao.html?id='+i.ident+'">'+i.nome+'</a>';
                if(i.altitude != ''){
                  string = string + '<a href="mapa.html?id='+i.ident+'" class="link e5">'+banco[idioma]['e5']+'</a>';
                }
                string = string + '</p>';
              }             
            }
          });

          $('#entidades').html(string);

      }else if(categoria == "" && estado != ""){
        var string = '';
          $.each(instituicao, function(index,i){        
            if(i != undefined){          
              var classe = 'class = "inst"';
              if(i.aprovacao == '1' && i.estado == estado){
                string = string + '<p '+classe+'><a href="verInstituicao.html?id='+i.ident+'">'+i.nome+'</a>';
                if(i.altitude != ''){
                  string = string + '<a href="mapa.html?id='+i.ident+'" class="link e5">'+banco[idioma]['e5']+'</a>';
                }
                string = string + '</p>';
              }             
            }
          });

          $('#entidades').html(string);
      }else{
        var string = '';
        $.each(instituicao, function(index,i){        
        if(i != undefined){          
          var classe = 'class = "inst"';
          
          string = string + '<p '+classe+'><a href="verInstituicao.html?id='+i.ident+'">'+i.nome+'</a>';
          if(i.altitude != ''){
            string = string + '<a href="mapa.html?id='+i.ident+'" class="link e5">'+banco[idioma]['e5']+'</a>';
          }
          string = string + '</p>';
          
          
        }
      });

      $('#entidades').html(string);
      }

      if($('#entidades').html() == ''){
       $('#entidades').html('Nenhuma instituição nessa categoria ou estado.'); 
      }
           
    });

  x = window.location;
  str = x.href;

  if (str.indexOf("verInstituicao") >= 0){
    
    var ident = _GET('id');

    inst = instituicao[ident];

    $('h1').text(inst.nome);
    $('#dados').append('<p><b>'+banco[idioma]['r']+'</b>'+inst.categoria+'</p>');
    $('#dados').append('<p><b>'+banco[idioma]['r6']+'</b>'+inst.cidade+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>'+banco[idioma]['r7']+'</b>'+inst.estado+'</p>');
    $('#dados').append('<p><b>'+banco[idioma]['r5']+'</b>'+inst.endereco+'</p>');

    telefone = inst.telefone.split(' ');
    for(i = 0; i < telefone.length; i++){
      num = apenasNumeros(telefone[i]);
      if(isNaN(num) == false){
        numS = num + '';
          if(numS.length == 2){
            ddd = numS;
          }else{
            nume = numS;
          }
      }           
    } 
    
    fone = ddd + nume;
    //numTel = telefone.replace(/[^0-9]/g,'');
    //alert(numTel);

    if(inst.telefone != ''){
      $('#dados').append('<p><b>'+banco[idioma]['r4']+'</b><a href="tel:+55'+fone+'">'+inst.telefone+'</a></p>');
    }
    if(inst.email != ''){
       $('#dados').append('<p><b>'+banco[idioma]['r3']+'</b>'+inst.email+'</p>');
    }
    if(inst.redesSociais != ''){
      $('#dados').append('<p><b>'+banco[idioma]['r8']+'</b>'+inst.redesSociais+'</p>');
    }
    if(inst.site != ''){
      $('#dados').append('<p><b>'+banco[idioma]['r10']+'</b><a target="_blank" href="'+inst.site+'" >'+inst.site+'</a></p>');
    }
    if(inst.descricao != ''){
      $('#dados').append('<p><b>'+banco[idioma]['r9']+'</b>'+inst.descricao+'</p>');
    }
    if(inst.altitude != ''){
      $('.coordenada').html('<a href="mapa.html?id='+inst.ident+'">'+banco[idioma]['e5']+'</a>');
    }
  }


    
   
   
});

function apenasNumeros(string) 
{
    var numsStr = string.replace(/[^0-9]/g,'');
    return parseInt(numsStr);
}

function _GET(name)
{
  var url   = window.location.search.replace("?", "");
  var itens = url.split("&");
 
  for(n in itens)
  {
    if( itens[n].match(name) )
    {
      return decodeURIComponent(itens[n].replace(name+"=", ""));
    }
  }
  return null;
}




/*var map;
function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}*/
