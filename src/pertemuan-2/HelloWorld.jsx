export default function HelloWorld(){
    const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01",
        usia:50
    }

    return (
        <div>
            <h1>Hello World</h1>
            
            <img src="./img/logo-pcr.webp" width="100%"/>

            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <hr/>
            <UserCard 
	            nama="Fikri" 
	            nim="169412"
	            tanggal={new Date().toLocaleDateString()}
	        />

            <UserCard
                nama="Adudu"
                nim="1234"
                tanggal="2026/12/03"
            />

            <UserCard {...propsUserCard}/>
        </div>
    )
}

function GreetingBinjai(){
      return (
            <small>Salam dari Binjai 👌</small>
      )
}

function UserCard(props){
    return (
        <div className="card">

            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
            <p>Usia : {props.usia}</p>
        </div>
    )
}