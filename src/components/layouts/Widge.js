import React from 'react'
import "./Widge.css"
import SearchIcon from '@material-ui/icons/Search';

function Widge() {
    return (
        <div className="widget">
            <div className="widget_input">
                <SearchIcon className="widget_search" />
                <input placeholder="Buscar en twitter" type="text" />
            </div>
            <div className="widget_container">
                <h2>Qué está pasando</h2>
                <div className="widget_tendencia">
                    <div className="widget_tendenciaLeft">
                        <span className="widget_tendenciaSpan">COVID-19</span>
                        <div className="widget_tendenciaText">Oxford University Press reporta primera muerte por reinfección de COVID-19</div>
                    </div>
                    <div className="widget_tendenciaRight">
                    <img src="https://pbs.twimg.com/semantic_core_img/1316002893200199680/1WWwsX6e?format=jpg&name=240x240" className="widget_tendenciaImagen"/>
                    </div>
                </div>
                <div className="widget_tendencia">
                    <div className="widget_tendenciaLeft">
                        <span className="widget_tendenciaSpan">Tendencia en España</span>
                        <div className="widget_tendenciaText">La Policía Nacional</div>
                        <span className="widget_tendenciaSpan">4.423 Tweets</span>
                    </div>
                    <div className="widget_tendenciaRight">
                    </div>
                </div>
                <div className="widget_tendencia">
                    <div className="widget_tendenciaLeft">
                        <span className="widget_tendenciaSpan">Tendencia en España</span>
                        <div className="widget_tendenciaText">MENAS</div>
                        <span className="widget_tendenciaSpan">1.355 Tweets</span>
                    </div>
                    <div className="widget_tendenciaRight">
                    </div>
                </div>
                <div className="widget_tendencia">
                    <div className="widget_tendenciaLeft">
                        <span className="widget_tendenciaSpan">Tendencia en España</span>
                        <div className="widget_tendenciaText">#CierrESpCovid</div>
                    </div>
                    <div className="widget_tendenciaRight">
                    </div>
                </div>
                <div className="widget_tendencia">
                    <div className="widget_tendenciaLeft">
                        <span className="widget_tendenciaSpan">Política - Tendencia</span>
                        <div className="widget_tendenciaText">Iglresias</div>
                        <span className="widget_tendenciaSpan">72.7 mil Tweets</span>
                    </div>
                    <div className="widget_tendenciaRight">
                    </div>
                </div>
                Mostrar más
               
            </div>
        </div>
    )
}

export default Widge
