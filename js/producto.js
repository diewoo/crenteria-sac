//obteniendo los ids de las maquinas
'use strict'

$(document).ready(function() {

        valorid = 1;	
    valorid = sessionStorage.getItem('id');
    if (valorid !== undefined) {
        if (valorid === null) {
            valorid = 1;
            $('#cargador').removeClass('loader');
            console.log(valorid);
            obtenerProducto(valorid);

        } else {
            $('#cargador').removeClass('loader');
            obtenerProducto(valorid);
        }

    }

    let vzelda = "";
    $('.zelda').click(function(e) {
        vzelda = $(this).attr('prop');
        sessionStorage.setItem('id', vzelda);
        //obtenerProducto(vzelda);
        window.location.href = './producto.html';

        e.preventDefault();

    });


});


let tabla, output, valorid = "";
//funciones de ayuda para listar los valores la BD(maquinas)
function obtenerSeleccionado(id) {
    sessionStorage.setItem('productoId', id);
    window.location = 'producto.html';
    return false;
}

function obtenerProducto(id) {


    var config = {
        headers: {
            "Content-Type": " text/html;charset=utf-8; "
        }
    };
    //var url = "http://localhost:3000/api/getMaquinas?tipo=";
    var url = "https://crenteriaweb.herokuapp.com/api/getMaquinas?tipo=";
    axios.get(url + id, config)
        .then((response) => {

            $('#cargador').addClass('loader');
            let producto = response.data;
            let detalle = producto.data.detalle.descripcion;
            var photo = producto.data.detalle.foto;

            let maquinas = producto.data.maquinas;
            //formateando el texto a utf-8
            let replaced = detalle.replace(/aaa/g, 'á').replace(/eee/g, 'é')
                .replace(/iii/g, 'í').replace(/ooo/g, 'ó').replace(/uuu/g, 'ú')
                .replace(/enie/g, 'ñ');
            let tablaOutput = '';
            let trModelo = '';
            let tdAnchoBobina = '';
            let tdLargoBolsa = '';
            let tdVelocidad = '';
            let tdAlimentacion = '';
            let tdVolumenLlenado = '';
            let tdPeso = '';
            let tdConsumoAire = '';
            let tdPotencia = '';
            let tdDimensiones = '';
            let tdAnchoBolsa = '';
            let tdPresionAire = '';
            let tdAltura = '';
            let tdLongitudPaquete = '';
            let tdAnchoPaquete = '';
            let tdVoltaje = '';
            let tdZipper = '';
            let tdEstaciones = '';
            let tdPesoBolsa = '';
            let tdDosificados = '';
            let tdEspesorFilm = '';
            let tdDiametroBobina = '';
            let tdRangoLlenado = '';
            let tdNroModulosPesaje = '';
            let tdVolumenTolva = '';
            let tdExactitud = '';
            let tdPesoMaximoDescarga = '';
            let tdPesoMaximoDescargaenC = '';
            let tdTension = '';
            let tdTamanio = '';
            let tdTipoMaquina = '';
            let tdversion = '';
            let tddiametroTornillo = '';
            let tdRangoPeso = '';
            let tdCapacidad = '';
            let tdOpciones = '';
            let tdPrecisio = '';
            let tdMinEscala = '';
            let tdProgramas = '';
            let tdSistema = '';
            let tdCinturon = '';
            let tdLargo = '';
            //construyendo la tabla
            for (let i in maquinas) {
                tdCapacidad += '<th style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].capacidad + '</th>';
                trModelo += '<th style="background-color: brown;color:#ffffff" >' + maquinas[i].modelo + '</th>';
                tdPrecisio += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].precisio + '</th>';
                tdMinEscala += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].min_escala + '</th>';
                tdProgramas += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].programas + '</th>'
                tdSistema += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].sistema + '</th>'
                tdCinturon += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].cinturon + '</th>'
                tdEspesorFilm += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].espesor + '</th>';
                tddiametroTornillo += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].diametro + '</th>';
                tdRangoPeso += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].rango + '</th>';
                tdLargo += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].largo + '</th>';
                tdTipoMaquina += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].tipo_maquina + '</th>';
                tdversion += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].version + '</th>';
                tdTension += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].tension + '</th>';
                tdNroModulosPesaje += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].nro_modulos_peaje + '</th>';
                tdPesoMaximoDescarga += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].peso_max + '</th>';
                tdPesoMaximoDescargaenC += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].peso_descarga + '</th>';
                tdVolumenTolva += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].volumen_tolva + '</th>';
                tdDiametroBobina += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].diametro_bobina + '</th>';
                tdExactitud += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].exactitud + '</th>';
                tdRangoLlenado += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].rango_llenado + '</th>';
                tdLongitudPaquete += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].longitud_paquete + '</th>';
                tdZipper += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].zipper + '</th>';
                tdEstaciones += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].estaciones + '</th>';
                tdDosificados += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].dosificados + '</th>';
                tdPesoBolsa += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].peso_bolsa + '</th>';
                tdAnchoPaquete += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].ancho_paquete + '</th>';
                tdAltura += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].altura + '</th>';
                tdVoltaje += '<th  style="background-color: #B6B6B6;color:#ffffff" >' + maquinas[i].voltaje + '</th>';
                tdAnchoBobina += '<td  style="background-color:#B6B6B6;color:#ffffff;">' + maquinas[i].ancho_bobina + '</td>'
                tdLargoBolsa += '<td  style="background-color:#B6B6B6;color:#ffffff;">' + maquinas[i].largo_bolsa + '</td>'
                tdVelocidad += '<td style="background-color:#B6B6B6;color:#ffffff;">' + maquinas[i].velocidad + '</td>'
                tdAlimentacion += '<td  style="background-color:#B6B6B6;color:#ffffff;">' + maquinas[i].alimentacion + '</td>'
                tdVolumenLlenado += '<td  style="background-color:#B6B6B6;color:#ffffff;">' + maquinas[i].volumen_llenado + '</td>'
                tdPeso += '<td  style="background-color:#B6B6B6;color:#ffffff;">' + maquinas[i].peso + '</td>'
                tdConsumoAire += '<td   style="background-color:#B6B6B6;color:#ffffff;">' + maquinas[i].consumo_aire + '</td>'
                tdPotencia += '<td  style="background-color:#B6B6B6;color:#ffffff;">' + maquinas[i].potencia + '</td>'
                tdDimensiones += '<td style="background-color:#B6B6B6;color:#ffffff;">' + maquinas[i].dimensiones + '</td>'
                tdTamanio += '<td style="background-color:#B6B6B6;color:#ffffff;">' + maquinas[i].tamanio + '</td>'
                tdAnchoBolsa += '<td  style="background-color:#B6B6B6;color:#ffffff;">' + maquinas[i].ancho_bolsa + '</td>'
                tdPresionAire += '<td  style="background-color:#B6B6B6;color: #ffffff;">' + maquinas[i].presion_aire + '</td>'
                tdOpciones += '<td  style="background-color:#B6B6B6;color: #ffffff;">' + maquinas[i].opciones + '</td>'
                    // })

            }

            let idMaquina = producto.data.detalle.idtipo_maquina;
            //console.log(idMaquina);

            let url1, url2, url3, link1, link2, link3, titulo;
            titulo = producto.data.detalle.tipo.toUpperCase();

            switch (idMaquina) {
                case 1:

                    output = `
              <div class="row">
              <div class="col-md-12">
              <h1 style="color:brown;font-family:BrownStd-Bold">${titulo}</h1>
              </div>
              <div class="col-md-5"><img  src="${producto.data.detalle.foto}"  id="ex1" class="img-fluid zoom" alt="Responsive image"/></div>
              <div class="col-md-7">
                <p style="font-size:1.1em;text-align:justify;font-family:BrownStd-Bold"> 
                ${replaced}</p></div>
              </div>
              </div>
              <div class="row">
              <div class="col-md-12 table table-responsive " style="font-family:BrownStd-Bold">
              <table style="font-size:0.70em;font-family:BrownStd-Bold" class="table  table-sm ">
              <thead>
                <tr>
                  <th style="background-color: brown;color:#ffffff;">MODELO</th>
                  ${trModelo}
                </tr>
              </thead>
              <tbody class="table-bordered">
              <tr>
               <th style="background-color: brown;color:#ffffff" scope="row">TIPO DE MÁQUINA</th>
               ${tdTipoMaquina}
              </tr>
                <tr>
                 <th style="background-color: brown;color:#ffffff" scope="row">ANCHO DE BOBINA</th>
                 ${tdAnchoBobina}
                </tr>
                <tr>
                 <th style="background-color: brown;color:#ffffff" scope="row">LARGO DE BOLSA</th>
                 ${tdLargoBolsa}
                </tr>
                <tr>
                 <th style="background-color: brown;color:#ffffff" scope="row">VELOCIDAD</th>
                 ${tdVelocidad}
                </tr>
                <tr>
                 <th style="background-color: brown;color:#ffffff" scope="row">ALIMENTACIÓN</th>
                 ${tdAlimentacion}
                </tr>
                <tr>
                 <th style="background-color: brown;color:#ffffff" scope="row">VOLUMEN DE LLENADO</th>
                 ${tdVolumenLlenado}
                </tr>
                <tr>
                 <th  style="background-color: brown;color:#ffffff"scope="row">PESO</th>
                 ${tdPeso}
                </tr>
                <tr>
                 <th  style="background-color: brown;color:#ffffff" scope="row">CONSUMO DE AIRE</th>
                 ${tdConsumoAire}
                </tr>
                <tr>
                 <th  style="background-color: brown;color:#ffffff"scope="row">POTENCIA</th>
                 ${tdPotencia}
                </tr>
                <tr>
                 <th  style="background-color: brown;color:#ffffff" scope="row">DIMENSIONES</th>
                 ${tdDimensiones}
                </tr>
                <tr>
                 <th  style="background-color: brown;color:#ffffff" scope="row">ANCHO DE LA BOLSA</th>
                 ${tdAnchoBolsa}
                </tr>
                <tr>
                 <th  style="background-color: brown;color:#ffffff"scope="row">PRESIÓN DE AIRE</th>
                 ${tdPresionAire}
                </tr>
              </tbody>
              </table>

              </div>



        `;

                    //let tabla = output;

                    url1 = producto.data.detalle.enlace1;
                    url2 = producto.data.detalle.enlace2;
                    url3 = producto.data.detalle.enlace3;
                    //console.log(url1);
                    link1 = `
                        <div class="embed-responsive embed-responsive-16by9">
                          <iframe  class="embed-responsive-item"
                          src="${url1}"
                          frameborder="0" allowfullscreen></iframe>
                        </div>
        `;
                    link2 = `
                            <div class="embed-responsive embed-responsive-16by9">
                              <iframe class="embed-responsive-item"
                              src="${url2}"
                              frameborder="0" allowfullscreen></iframe>
                            </div>
        `;
                    link3 = `  <div class="embed-responsive embed-responsive-16by9">
                                  <iframe class="embed-responsive-item"
                                  src="${url3}"
                                  frameborder="0" allowfullscreen></iframe>
                                </div>
        `;

                    break;
                case 2:
                    output = `
                <div class="row">
                <div class="col-md-12">
                <h1 style="color:brown;font-family:BrownStd-Bold">${titulo}</h1>
                </div>
                <div class="col-md-5"><img  src="${producto.data.detalle.foto}" class="img-fluid" alt="Responsive image"/></div>
                <div class="col-md-7">
                  <p style="font-size:1.1em;text-align:justify;font-family:BrownStd-Bold">
                  ${replaced}</p></div>
                </div>
                </div>
                <div class="row">
                <div class="col-md-12 table table-responsive">
                <table  style="font-size:0.70em;font-family:BrownStd-Bold" class="table  table-sm">
                <thead>
                  <tr >
                    <th  style="background-color: brown;color:#ffffff">MODELO</th>
                    ${trModelo}
                  </tr>
                </thead>
                <tbody class="table-bordered">
                <tr >
                 <th  style="background-color: brown;color:#ffffff" scope="row">VERSIÓN</th>
                 ${tdversion}
                </tr>
                  <tr >
                   <th  style="background-color: brown;color:#ffffff" scope="row">ANCHO MÁXIMO DE BOBINA</th>
                   ${tdAnchoBobina}
                  </tr>
                  <tr>
                   <th  style="background-color: brown;color:#ffffff" scope="row">LONGITUD MÍNIMA DEL PAQUETE</th>
                   ${tdLongitudPaquete}
                  </tr>
                  <tr>
                   <th  style="background-color: brown;color:#ffffff" scope="row">ANCHO MÍNIMO DEL PAQUETE</th>
                   ${tdAnchoPaquete}
                  </tr>
                  <tr>
                   <th   style="background-color: brown;color:#ffffff" scope="row">VELOCIDAD MÁXIMA </th>
                   ${tdVelocidad}
                  </tr>

                  <tr>
                   <th   style="background-color: brown;color:#ffffff" scope="row">ALTURA MÁXIMA DEL PAQUETE</th>
                   ${tdAltura}
                  </tr>
                  <tr>
                   <th   style="background-color: brown;color:#ffffff"scope="row">PESO</th>
                   ${tdPeso}
                  </tr>
                  <tr>
                   <th  style="background-color: brown;color:#ffffff" scope="row">VOLTAJE</th>
                   ${tdVoltaje}
                  </tr>
                  <tr>
                   <th   style="background-color: brown;color:#ffffff"scope="row">POTENCIA</th>
                   ${tdPotencia}
                  </tr>
                  <tr>
                   <th style="background-color: brown;color:#ffffff" scope="row">DIMENSIONES</th>
                   ${tdDimensiones}
                  </tr>
                </tbody>
                </table>

                </div>



          `;
                    url1 = producto.data.detalle.enlace1;
                    link1 = `
                        <div class="embed-responsive embed-responsive-16by9">
                          <iframe  class="embed-responsive-item"
                          src="${url1}"
                          frameborder="0" allowfullscreen></iframe>
                        </div>
        `;

                    break;
                case 3:
                    output = `
              <div class="row">
              <div class="col-md-12">
              <h1 style="color:brown;">${titulo}</h1>
              </div>
              <div class="col-md-5"><img  src="${producto.data.detalle.foto}" class="img-fluid" alt="Responsive image"/></div>
              <div class="col-md-7">
                <p style="font-size:1.1em;text-align:justify;font-family:BrownStd-Bold">
                ${replaced}</p></div>
              </div>
              </div>
              <div class="row">
              <div class="col-md-12  table table-responsive">
              <table  style="font-size:0.70em;font-family:BrownStd-Bold;" class="table-sm">
              <thead  >
                <tr>
                  <th style="background-color: brown;color:#ffffff;">MODELO</th>
                  ${trModelo}
                </tr>
              </thead>
              <tbody class="table-bordered">
                <tr class="m-0">
                 <th  style="background-color: brown;color:#ffffff" scope="row">NÚMERO DE ESTACIONES</th>
                 ${tdEstaciones}
                </tr>
                <tr>
                 <th  style="background-color: brown;color:#ffffff" scope="row">ESTACIONES DE DOSIFICADO</th>
                 ${tdDosificados}
                </tr>
                <tr>
                 <th  style="background-color: brown;color:#ffffff" scope="row">ZIPPER</th>
                 ${tdZipper}
                </tr>
                <tr>
                 <th style="background-color: brown;color:#ffffff" scope="row">PESO  MÁXIMO DE LA BOLSA</th>
                 ${tdPesoBolsa}
                </tr>
                <tr>
                 <th style="background-color: brown;color:#ffffff" scope="row">ANCHO DE LA BOLSA</th>
                 ${tdAnchoBolsa}
                </tr>
                <tr>
                 <th  style="background-color: brown;color:#ffffff"scope="row">LARGO DE LA BOLSA</th>
                 ${tdLargoBolsa}
                </tr>
                <tr>
                 <th style="background-color: brown;color:#ffffff" scope="row">VELOCIDAD</th>
                 ${tdVelocidad}
                </tr>
                <tr>
                 <th  style="background-color: brown;color:#ffffff"scope="row">ALIMENTACIÓN</th>
                 ${tdAlimentacion}
                </tr>
                <tr>
                 <th  style="background-color: brown;color:#ffffff" scope="row">POTENCIA</th>
                 ${tdPotencia}
                </tr>
                <tr>
                 <th  style="background-color: brown;color:#ffffff" scope="row">CONSUMO DE AIRE</th>
                 ${tdConsumoAire}
                </tr>
                <tr>
                 <th  style="background-color: brown;color:#ffffff"scope="row">DIMENSIONES</th>
                 ${tdDimensiones}
                </tr>
                <tr>
                 <th  style="background-color: brown;color:#ffffff"scope="row">PESO</th>
                 ${tdPeso}
                </tr>
              </tbody>
              </table>

              </div>



        `;
                    url1 = producto.data.detalle.enlace1;
                    url2 = producto.data.detalle.enlace2;
                    link1 = `
            <div class="embed-responsive embed-responsive-16by9">
              <iframe  class="embed-responsive-item"
              src="${url1}"
              frameborder="0" allowfullscreen></iframe>
            </div>
`;
                    link2 = `
<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item"
src="${url2}"
frameborder="0" allowfullscreen></iframe>
</div>
`;

                    break;
                case 4:
                    output = `
                  <div class="row">
                  <div class="col-md-12">
                  <h1 style="color:brown;font-family:BrownStd-Bold">${titulo}</h1>
                  </div>
                  <div class="col-md-5"><img  src="${producto.data.detalle.foto}" class="img-fluid" alt="Responsive image"/></div>
                  <div class="col-md-7">
                    <p style="font-size:1.1em;text-align:justify;font-family:BrownStd-Bold">
                    ${replaced}</p></div>
                  </div>
                  </div>
                  <div class="row">
                  <div class="col-md-12 table table-responsive">
                  <table  style="font-size:0.75em;font-family:BrownStd-Bold" class="table  table-sm">
                  <thead>
                    <tr class="m-0" >
                      <th  style="background-color: brown;color:#ffffff">MODELO</th>
                      ${trModelo}
                    </tr>
                  </thead>
                  <tbody class="table-bordered">
                    <tr >
                     <th  style="background-color: brown;color:#ffffff" scope="row">NÚMERO DE MÓDULOS DE PESAJE</th>
                     ${tdNroModulosPesaje}
                    </tr>
                    <tr>
                     <th  style="background-color: brown;color:#ffffff" scope="row">VOLUMEN DE LA TOLVA</th>
                     ${tdVolumenTolva}
                    </tr>
                    <tr>
                     <th  style="background-color: brown;color:#ffffff" scope="row">VELOCIDAD MÁXIMA</th>
                     ${tdVelocidad}
                    </tr>
                    <tr>
                     <th  style="background-color: brown;color:#ffffff" scope="row">PESO MÁXIMO DE DESCARGA</th>
                     ${tdPesoMaximoDescarga}
                    </tr>
                    <tr>
                     <th   style="background-color: brown;color:#ffffff" scope="row">EXACTITUD</th>
                     ${tdExactitud}
                    </tr>

                    <tr>
                     <th   style="background-color: brown;color:#ffffff" scope="row">TENSIÓN</th>
                     ${tdTension}
                    </tr>
                    <tr>
                     <th   style="background-color: brown;color:#ffffff"scope="row">POTENCIA</th>
                     ${tdPotencia}
                    </tr>
                    <tr>
                     <th  style="background-color: brown;color:#ffffff" scope="row">DIMENSIONES</th>
                     ${tdTamanio}
                    </tr>
                    <tr>
                     <th   style="background-color: brown;color:#ffffff"scope="row">PESO</th>
                     ${tdPeso}
                    </tr>

                  </tbody>
                  </table>

                  </div>



            `;
                    url1 = producto.data.detalle.enlace1;
                    url2 = producto.data.detalle.enlace2;
                    url3 = producto.data.detalle.enlace3;

                    link1 = `
          <div class="embed-responsive embed-responsive-16by9">
          <iframe  class="embed-responsive-item"
          src="${url1}"
          frameborder="0" allowfullscreen></iframe>
          </div>
          `;
                    link2 = `
          <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item"
          src="${url2}"
          frameborder="0" allowfullscreen></iframe>
          </div>
          `;
                    link3 = `  <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item"
          src="${url3}"
          frameborder="0" allowfullscreen></iframe>
          </div>
          `;

                    break;
                case 5:
                    output = `
                    <div class="row">
                    <div class="col-md-12">
                    <h1 style="color:brown;font-family:BrownStd-Bold">${titulo}</h1>
                    </div>
                    <div class="col-md-5"><img  src="${producto.data.detalle.foto}" class="img-fluid" alt="Responsive image"/></div>
                    <div class="col-md-7">
                      <p style="font-size:1.1em;text-align:justify;font-family:BrownStd-Bold">
                      ${replaced}</p></div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-12 table table-responsive">
                    <table  style="font-size:0.75em;font-family:BrownStd-Bold" class="table  table-sm">
                    <thead>
                      <tr >
                        <th  style="background-color: brown;color:#ffffff">MODELO</th>
                        ${trModelo}
                      </tr>
                    </thead>
                    <tbody class="table-bordered">
                      <tr >
                       <th  style="background-color: brown;color:#ffffff" scope="row">VOLUMEN DE TOLVA</th>
                       ${tdVolumenTolva}
                      </tr>
                      <tr>
                       <th  style="background-color: brown;color:#ffffff" scope="row">MÓDULOS DE PESAJE</th>
                       ${tdNroModulosPesaje}
                      </tr>

                      <tr>
                         <th  style="background-color: brown;color:#ffffff" scope="row">PESO MÁXIMO DE DESCARGA POR TOLVA</th>
                       ${tdPesoMaximoDescarga}
                      </tr>

                      <tr>
                       <th   style="background-color: brown;color:#ffffff" scope="row">VELOCIDAD MÁXIMA</th>
                       ${tdVelocidad}
                      </tr>
                      <tr>
                       <th   style="background-color: brown;color:#ffffff" scope="row">EXACTITUD</th>
                       ${tdExactitud}
                      </tr>

                        <tr>
                         <th   style="background-color: brown;color:#ffffff"scope="row">ALIMENTACIÓN</th>
                         ${tdAlimentacion}
                        </tr>

                      <tr>
                       <th   style="background-color: brown;color:#ffffff"scope="row">POTENCIA</th>
                       ${tdPotencia}
                      </tr>
                      <tr>
                       <th  style="background-color: brown;color:#ffffff" scope="row">DIMENSIONES</th>
                       ${tdDimensiones}
                      </tr>
                      <tr>
                       <th   style="background-color: brown;color:#ffffff"scope="row">PESO</th>
                       ${tdPeso}
                      </tr>

                    </tbody>
                    </table>

                    </div>
              `;
                    url1 = producto.data.detalle.enlace1;
                    link1 = `
      <div class="embed-responsive embed-responsive-16by9">
        <iframe  class="embed-responsive-item"
        src="${url1}"
        frameborder="0" allowfullscreen></iframe>
      </div>
`;
                    break;
                case 6:
                    output = `
                        <div class="row">
                        <div class="col-md-12">
                        <h2 style="color:brown;font-family:BrownStd-Bold">${titulo}</h2>
                        </div>
                        <div class="col-md-5"><img  src="${producto.data.detalle.foto}" class="img-fluid" alt="Responsive image"/></div>
                        <div class="col-md-7">
                          <p style="font-size:1.1em;text-align:justify;font-family:BrownStd-Bold">
                          ${replaced}</p></div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-md-12 table table-responsive">
                        <table  style="font-size:0.75em;font-family:BrownStd-Bold" class="table  table-sm">
                        <thead>
                          <tr >
                            <th  style="background-color: brown;color:#ffffff">MODELO</th>
                            ${trModelo}
                          </tr>
                        </thead>
                        <tbody class="table-bordered">
                          <tr >
                           <th  style="background-color: brown;color:#ffffff" scope="row">CAPACIDAD</th>
                           ${tdCapacidad}
                          </tr>
                          <tr>
                           <th  style="background-color: brown;color:#ffffff" scope="row">VOLUMEN </th>
                           ${tdVolumenTolva}
                          </tr>

                          <tr>
                             <th  style="background-color: brown;color:#ffffff" scope="row">VELOCIDAD </th>
                           ${tdVelocidad}
                          </tr>
                          <tr>
                             <th  style="background-color: brown;color:#ffffff" scope="row">DIMENSIONES </th>
                           ${tdDimensiones}
                          </tr>


                        </tbody>
                        </table>

                        </div>
                  `;
                    url1 = producto.data.detalle.enlace1;
                    link1 = `
    <div class="embed-responsive embed-responsive-16by9">
      <iframe  class="embed-responsive-item"
      src="${url1}"
      frameborder="0" allowfullscreen></iframe>
    </div>
`;
                    break;
                case 7:
                    output = `
                      <div class="row">
                      <div class="col-md-12">
                      <h1 style="color:brown;font-family:BrownStd-Bold">${titulo}</h1>
                      </div>
                      <div class="col-md-5 col-sm-5 pull-left"><img  src="${producto.data.detalle.foto}" class="img-fluid" alt="Responsive image"/></div>
                      <div class="col-md-7">
                        <blockquote  class="blockquote" style="font-size:1.1em;text-align:justify;font-family:BrownStd-Bold">
                        ${replaced}</blockquote></div>
                      </div>
                      </div>
                      <div class="row">
                      <div class="col-md-12 table table-responsive">
                      <table  style="font-size:0.75em;font-family:BrownStd-Bold" class="table  table-sm">
                      <thead>
                        <tr >
                          <th  style="background-color: brown;color:#ffffff">MODELO</th>
                          ${trModelo}
                        </tr>
                      </thead>
                      <tbody class="table-bordered">
                        <tr >
                         <th  style="background-color: brown;color:#ffffff" scope="row">DIÁMETRO DEL TORNILLO</th>
                         ${tddiametroTornillo}
                        </tr>
                        <tr>
                         <th  style="background-color: brown;color:#ffffff" scope="row">RANGO DE PESO</th>
                         ${tdRangoPeso}
                        </tr>

                        <tr>
                           <th  style="background-color: brown;color:#ffffff" scope="row">VELOCIDAD MÁXIMA</th>
                         ${tdVelocidad}
                        </tr>


                        <tr>
                         <th   style="background-color: brown;color:#ffffff" scope="row">EXACTITUD</th>
                         ${tdExactitud}
                        </tr>

                          <tr>
                           <th   style="background-color: brown;color:#ffffff"scope="row">ALIMENTACIÓN</th>
                           ${tdAlimentacion}
                          </tr>

                        <tr>
                         <th   style="background-color: brown;color:#ffffff"scope="row">POTENCIA</th>
                         ${tdPotencia}
                        </tr>

                        <tr>
                         <th   style="background-color: brown;color:#ffffff"scope="row">PESO</th>
                         ${tdPeso}
                        </tr>
                        <tr>
                         <th   style="background-color: brown;color:#ffffff"scope="row">VOLUMEN DE LA TOLVA</th>
                         ${tdVolumenTolva}
                        </tr>
                      </tbody>
                      </table>

                      </div>
                `;
                    url1 = producto.data.detalle.enlace1;
                    url2 = producto.data.detalle.enlace2;
                    url3 = producto.data.detalle.enlace3;
                    //console.log(url1);
                    link1 = `
              <div class="embed-responsive embed-responsive-16by9">
              <iframe  class="embed-responsive-item"
              src="${url1}"
              frameborder="0" allowfullscreen></iframe>
              </div>
              `;
                    link2 = `
              <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item"
              src="${url2}"
              frameborder="0" allowfullscreen></iframe>
              </div>
              `;
                    link3 = `  <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item"
              src="${url3}"
              frameborder="0" allowfullscreen></iframe>
              </div>
              `;
                    break;
                case 8:
                    output = `
                <div class="row">
                <div class="col-md-12">
                <h1 style="color:brown;">${titulo}</h1>
                </div>
                <div class="col-md-5"><img  src="${producto.data.detalle.foto}" class="img-fluid" alt="Responsive image"/></div>
                <div class="col-md-7">
                  <p style="font-size:1.1em;text-align:justify;font-family:BrownStd-Bold">
                  ${replaced}</p></div>
                </div>
                </div>
                <div class="row">
                <div class="col-md-12 table table-responsive">
                <table  style="font-size:0.75em;font-family:BrownStd-Bold;" class="table  table-sm">
                <thead  >
                  <tr class="m-0">
                    <th style="background-color: brown;color:#ffffff;">MODELO</th>
                    ${trModelo}
                  </tr>
                </thead>
                <tbody class="table-bordered">
                  <tr class="m-0">
                   <th  style="background-color: brown;color:#ffffff" scope="row">VELOCIDAD DE EMPACADO</th>
                   ${tdVelocidad}
                  </tr>
                  <tr>
                   <th  style="background-color: brown;color:#ffffff" scope="row">ANCHO MÁXIMO DE LA BOBINA</th>
                   ${tdAnchoPaquete}
                  </tr>
                  <tr>
                   <th  style="background-color: brown;color:#ffffff" scope="row">TAMAÑO DE BOLSA</th>
                   ${tdAnchoBolsa}
                  </tr>
                  <tr>
                   <th style="background-color: brown;color:#ffffff" scope="row">DIÁMETRO DE BOBINA</th>
                   ${tdDiametroBobina}
                  </tr>
                  <tr>
                   <th style="background-color: brown;color:#ffffff" scope="row">CONSUMO DE ENERGÍA</th>
                   ${tdAlimentacion}
                  </tr>
                  <tr>
                   <th  style="background-color: brown;color:#ffffff"scope="row">DIMENSIONES</th>
                   ${tdDimensiones}
                  </tr>
                  <tr>
                   <th style="background-color: brown;color:#ffffff" scope="row">ESPESOR DE FILM</th>
                   ${tdEspesorFilm}
                  </tr>
                  <tr>
                   <th  style="background-color: brown;color:#ffffff"scope="row">RANGO DE LLENADO</th>
                   ${tdRangoLlenado}
                  </tr>
                  <tr>
                   <th  style="background-color: brown;color:#ffffff" scope="row">PESO DE LA MÁQUINA</th>
                   ${tdPeso}
                  </tr>

                </tbody>
                </table>

                </div>



          `;
                    url1 = producto.data.detalle.enlace1;
                    link1 = `
                        <div class="embed-responsive embed-responsive-16by9">
                          <iframe  class="embed-responsive-item"
                          src="${url1}"
                          frameborder="0" allowfullscreen></iframe>
                        </div>
        `;

                    break;
                case 9:
                    output = `
                    <div class="row">
                    <div class="col-md-12">
                    <h1 style="color:brown;font-family:BrownStd-Bold">${titulo}</h1>
                    </div>
                    <div class="col-md-5"><img  src="${producto.data.detalle.foto}" class="img-fluid" alt="Responsive image"/></div>
                    <div class="col-md-7">
                      <p style="font-size:1.1em;text-align:justify;font-family:BrownStd-Bold">
                      ${replaced}</p></div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-12 table table-responsive">
                    <table  style="font-size:0.75em;font-family:BrownStd-Bold" class="table  table-sm">
                    <thead>
                      <tr >
                        <th  style="background-color: brown;color:#ffffff">MODELO</th>
                        ${trModelo}
                      </tr>
                    </thead>
                    <tbody class="table-bordered">
                      <tr >
                       <th  style="background-color: brown;color:#ffffff" scope="row">VELOCIDAD DE LLENADO</th>
                       ${tdVelocidad}
                      </tr>
                      <tr>
                       <th  style="background-color: brown;color:#ffffff" scope="row">VOLTAJE</th>
                       ${tdAlimentacion}
                      </tr>
                      <tr>
                         <th  style="background-color: brown;color:#ffffff" scope="row">PRESIÓN DE AIRE REQUERIDA</th>
                       ${tdPresionAire}
                      </tr>
                      <tr>
                       <th   style="background-color: brown;color:#ffffff" scope="row">EXACTITUD DE LLENADO</th>
                       ${tdExactitud}
                      </tr>
                      <tr>
                       <th   style="background-color: brown;color:#ffffff" scope="row">OPCIONES</th>
                       ${tdOpciones}
                      </tr>
                    </tbody>
                    </table>

                    </div>
              `;
                    break;
                case 10:
                    output = `
                    <div class="row">
                    <div class="col-md-12">
                    <h1 style="color:brown;font-family:BrownStd-Bold">${titulo}</h1>
                    </div>
                    <div class="col-md-5"><img  src="${producto.data.detalle.foto}" class="img-fluid" alt="Responsive image"/></div>
                    <div class="col-md-7">
                      <p style="font-size:1.1em;text-align:justify;font-family:BrownStd-Bold">
                      ${replaced}</p></div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-12 table table-responsive table-condensed ">
                    <table  style="font-size:0.75em;font-family:BrownStd-Bold" class="table table-sm ">
                    <thead>
                      <tr >

                        <th  colspan="6" style="background-color: brown;color:#ffffff;text-align:center;">RANGO ESTANDAR DE PESO</th>
                       
                      </tr>
                    </thead>
                    <tbody class="table-bordered">
                      <tr >
                       <th  style="background-color: brown;color:#ffffff" scope="row">ARTICULOS/ESPECIFICACIONES</th>
                       ${tdRangoPeso}
                      </tr>
                      <tr>
                       <th  style="background-color: brown;color:#ffffff" scope="row">VELOCIDAD(bpm)</th>
                       ${tdVelocidad}
                      </tr>
                      <tr>
                         <th  style="background-color: brown;color:#ffffff" scope="row">PRESIÓN(g)-+</th>
                       ${tdPrecisio}
                      </tr>
                      <tr>
                       <th   style="background-color: brown;color:#ffffff" scope="row">MIN ESCALA(g)</th>
                       ${tdMinEscala}
                      </tr>
                      <tr>
                       <th   style="background-color: brown;color:#ffffff" scope="row">PROGRAMAS ESTABLECIDOS DE PRODUCTOS</th>
                       ${tdProgramas}
                      </tr>
                       <tr>
                       <th style="background-color: brown;color:#ffffff" scope="row">DIMENSIONES(mm)/PESO</th>
                       ${tdDimensiones}
                      </tr>
                      <tr>
                      <th style="background-color: brown;color:#ffffff" scope="row">SISTEMA DE RECHAZO</th>
                       ${tdSistema}
                      </tr>
                      <tr>
                      <th style="background-color: brown;color:#ffffff" scope="row">TENSIÓN/FRECUENCIA/PODER</th>
                       ${tdTension}
                      </tr>
                      <tr>
                      <th style="background-color: brown;color:#ffffff" scope="row">CINTURON ALTURA/TAMAÑO</th>
                       ${tdCinturon}
                      </tr>
                    </tbody>
                    </table>

                    </div>
              `;

                    url1 = producto.data.detalle.enlace1;
                    link1 = `
<div class="embed-responsive embed-responsive-16by9">
<iframe  class="embed-responsive-item"
src="${url1}"
frameborder="0" allowfullscreen></iframe>
</div>
`;
                    break;
                case 11:
                    output = `
                    <div class="row">
                    <div class="col-md-12">
                    <h1 style="color:brown;font-family:BrownStd-Bold">${titulo}</h1>
                    </div>
                    <div class="col-md-5"><img  src="${producto.data.detalle.foto}" class="img-fluid" alt="Responsive image"/></div>
                    <div class="col-md-7">
                      <p style="font-size:1.1em;text-align:justify;font-family:BrownStd-Bold">
                      ${replaced}</p></div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-12 table table-responsive table-condensed ">
                                        </div>
              `;
                    url1 = producto.data.detalle.enlace1;
                    link1 = `
<div class="embed-responsive embed-responsive-16by9">
<iframe  class="embed-responsive-item"
src="${url1}"
frameborder="0" allowfullscreen></iframe>
</div>
`;
                    break;
                case 12:
                    output = `
                    <div class="row">
                    <div class="col-md-12">
                    <h1 style="color:brown;font-family:BrownStd-Bold">${titulo}</h1>
                    </div>
                    <div class="col-md-5"><img  src="${producto.data.detalle.foto}" class="img-fluid" alt="Responsive image"/></div>
                    <div class="col-md-7">
                      <p style="font-size:1.1em;text-align:justify;font-family:BrownStd-Bold">
                      ${replaced}</p></div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-12 table table-responsive table-condensed ">
                    </div>
              `;
                    url1 = producto.data.detalle.enlace1;
                    link1 = `
<div class="embed-responsive embed-responsive-16by9">
<iframe  class="embed-responsive-item"
src="${url1}"
frameborder="0" allowfullscreen></iframe>
</div>
`;
                case 13:
                    output = `
<div class="row">
<div class="col-md-12">
<h1 style="color:brown;font-family:BrownStd-Bold">${titulo}</h1>
</div>
<div class="col-md-5"><img  src="${producto.data.detalle.foto}" class="img-fluid" alt="Responsive image"/></div>
<div class="col-md-7">
  <p style="font-size:1.1em;text-align:justify;font-family:BrownStd-Bold">
  ${replaced}</p></div>
</div>
</div>
<div class="row">
<div class="col-md-12 table table-responsive table-condensed ">
</div>
`;

                    break;
                case 14:
                    output = `
                    <div class="row">
                    <div class="col-md-12">
                    <h1 style="color:brown;font-family:BrownStd-Bold">${titulo}</h1>
                    </div>
                    <div class="col-md-5"><img  src="${producto.data.detalle.foto}" class="img-fluid" alt="Responsive image"/></div>
                    <div class="col-md-7">
                      <p style="font-size:1.1em;text-align:justify;font-family:BrownStd-Bold">
                      ${replaced}</p></div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-12 table table-responsive table-condensed ">
                    <table  style="font-size:0.75em;font-family:BrownStd-Bold" class="table table-sm ">
                    <thead>
                    </thead>
                    <tbody class="table-bordered">
                      <tr >
                       <th  style="background-color: brown;color:#ffffff" scope="row">VELOCIDAD DE ETIQUETADO</th>
                       ${tdVelocidad}
                      </tr>
                      <tr>
                       <th  style="background-color: brown;color:#ffffff" scope="row">DIÁMETRO DE BOTELLA</th>
                       ${tddiametroTornillo}
                      </tr>
                      <tr>
                         <th  style="background-color: brown;color:#ffffff" scope="row">ALTURA MÁXIMO DE ETIQUETA</th>
                       ${tdAltura}
                      </tr>
                      <tr>
                       <th   style="background-color: brown;color:#ffffff" scope="row">LARGO MÁXIMO DE ETIQUETA</th>
                       ${tdLargo}
                      </tr>
                      <tr>
                       <th   style="background-color: brown;color:#ffffff" scope="row">DIMENSIÓN DE MÁQUINA</th>
                       ${tdDimensiones}
                      </tr>
                       <tr>
                       <th style="background-color: brown;color:#ffffff" scope="row">PESO DE MÁQUINA</th>
                       ${tdPeso}
                      </tr>
                    </tbody>
                    </table>
                  </div>
                </div>
              `;
                    url1 = producto.data.detalle.enlace1;
                    url2 = producto.data.detalle.enlace2;
                    link1 = `
<div class="embed-responsive embed-responsive-16by9">
<iframe  class="embed-responsive-item"
src="${url1}"
frameborder="0" allowfullscreen></iframe>
</div>
`;
                    link2 = `
<div class="embed-responsive embed-responsive-16by9">
<iframe  class="embed-responsive-item"
src="${url2}"
frameborder="0" allowfullscreen></iframe>
</div>
`;
                    break;


                case 15:
                    output = `
                    <div class="row">
                    <div class="col-md-12">
                    <h1 style="color:brown;font-family:BrownStd-Bold">${titulo}</h1>
                    </div>
                    <div class="col-md-5"><img  src="${producto.data.detalle.foto}" class="img-fluid" alt="Responsive image"/></div>
                    <div class="col-md-7">
                      <p style="font-size:1.1em;text-align:justify;font-family:BrownStd-Bold">
                      ${replaced}</p></div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-12 table table-responsive table-condensed ">
                    <table  style="font-size:0.75em;font-family:BrownStd-Bold" class="table table-sm ">
                    <thead>
                      <tr >

                        <th style="background-color: brown;color:#ffffff;text-align:center;">MODELO</th>
                        ${trModelo}
                      </tr>
                    </thead>
                    <tbody class="table-bordered">
                      <tr >
                       <th  style="background-color: brown;color:#ffffff" scope="row">FUENTE DE ALIMENTACIÓN</th>
                       ${tdAlimentacion}
                      </tr>
                      <tr>
                       <th  style="background-color: brown;color:#ffffff" scope="row">POTENCIA</th>
                       ${tdPotencia}
                      </tr>
                      <tr>
                         <th  style="background-color: brown;color:#ffffff" scope="row">CINTA TRANSPORTADORA DE VELOCIDAD</th>
                       ${tdVelocidad}
                      </tr>
                      <tr>
                       <th style="background-color: brown;color:#ffffff" scope="row">TRANSPORTADORA DE CARGA</th>
                       ${tdPesoMaximoDescarga}
                      </tr>
                      <tr>
                       <th   style="background-color: brown;color:#ffffff" scope="row">TAMAÑO DE EXTERIOR</th>
                       ${tddiametroTornillo}
                      </tr>
                       <tr>
                       <th style="background-color: brown;color:#ffffff" scope="row">TAMAÑO DE CABINA DE ENCOJIMIENTO</th>
                       ${tdDimensiones}
                      </tr>
                      <tr>
                      <th style="background-color: brown;color:#ffffff" scope="row">TEMPERATURA DEL VENTILADOR</th>
                       ${tdVoltaje}
                      </tr>
                      <tr>
                      <th style="background-color: brown;color:#ffffff" scope="row">ESPESOR DE PELICULA</th>
                       ${tdEspesorFilm}
                      </tr>
                      <tr>
                      <th style="background-color: brown;color:#ffffff" scope="row">MOTOR</th>
                       ${tdSistema}
                      </tr>
                      <tr>
                      <th style="background-color: brown;color:#ffffff" scope="row">PESO DE LA MÁQUINA</th>
                       ${tdPeso}
                      </tr>
                    </tbody>
                    </table>

                    </div>
              `;
                    break;

                default:
                    ""
            }



            //se construye la data para las envasadoras verticales en el html


            sessionStorage.setItem('tabla', output);

            tabla = sessionStorage.getItem('tabla');


            $('#producto').html(tabla);
            $('#link1').html(link1);
            $('#link2').html(link2);
            $('#link3').html(link3);

        })

    //error si esque fallara
    .catch((err) => {
        console.log(err);
    });

}