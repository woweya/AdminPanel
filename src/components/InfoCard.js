import people from './images/people.png';
import dollar from './images/dollar.png';
import calendar from './images/calendar.png';
import response from './images/send-money.png';

//! InfoCard è la componente per stampare a schermo le 4 card della pagina principale e dove all'interno troviamo anche i relativi parametri formali che
//! dovranno essere implementati con delle function (per ora ho solo scritto utentiOnline = 14; TotaleVendite= '200.000' ecc...)

const InfoCard =  ({utentiLista, utentiOnline, totaleVendite, totaleVenditeMese, mediaPagamenti, styling} ) => {
    utentiOnline = 14;
    totaleVendite = utentiLista.reduce((total, element) =>{
       return total + element.amount;
    }, 0).toString();
    totaleVenditeMese = '200.000';
    mediaPagamenti = '13';
    styling = {
        marginTop: '2rem',
        maxWidth: '13%',
        minWidth: '13%',
        textAlign: 'center',
        color: 'var(--primary-text)',
        padding: '30px',
        borderRadius: '10px',
        backgroundColor: 'var(--card-bgcolor)'
    }
    const infoList = [
        {id:1, img: people,  titolo: 'Staff User', numero: utentiOnline, paragrafo: 'Online Now'},
        {id:2, img: dollar,  titolo: 'Total in Sales', numero: totaleVendite, paragrafo: 'All Time'},
        {id:3, img: calendar,  titolo: 'Total in Sales', numero: totaleVenditeMese, paragrafo: 'Current Month'},
        {id:4, img: response,  titolo: 'Average Payment', numero: mediaPagamenti, paragrafo: 'Current Month'}
    ]


    const card = infoList.map((item) => (
        <div key={item.id} className={`card ${item.id}`} style={styling}>
            <div className="top-side" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img src={item.img} alt={item.titolo} />
            <h3 style={{minWidth:'10%', textAlign:'left'}}>{item.titolo}</h3>
            </div>
            <div className="bottom-side">
            <h2>{item.numero}</h2>
            <p style={{color: 'var(--secondary-color)', fontSize:'var(--font-p)'}}>{item.paragrafo}</p>
            </div>
        </div>
))
    return (
        <> 
        {card}
        </>
    )
}

export default InfoCard;