Nama    : Jenio Dwi Setyo Favian Gian

NIM     : 2141720212


# Praktikum 1: Event Handler
## Langkah 1
Kita mencoba membuat tombol sederhana yang belum bisa melakukan apa-apa alias belum kita buat event handler untuk tombol tersebut. Sebagai contoh, berikut adalah sebuah tombol yang belum melakukan apa pun. Kita buat folder/file baru di `src/component/button.tsx`
```
export default function Tombol_1() {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
            Ini tombol
        </button>
    )
}
```
Selanjutnya pada file `src/app/page.tsx` kita ubah menjadi seperti berikut
```
import Tombol_1 from "../components/button";

export default function Home() {
  return (
    <>
    <div className="container mx-auto">
      <h2>Kuis Kota</h2>
      <Tombol_1/>
    </div>
    </>
  )
}  
```
Kemudian kita jalankan perintah "npm run dev" dan kita buka alamat localhost:3000 pada browser. Maka akan tampil hasil seperti berikut
### Output Praktikum 1 Langkah 1
![Screenshoot](docs/p1l1.png) 

## Langkah 2
Langkah 2
Kita bisa menambahkan event pada tombol tersebut. Seperti contoh kita buat ketika tombol di klik, akan memunculkan notif/alert. Kita dapat membuat pesan ketika pengguna mengeklik dengan mengikuti tiga langkah berikut:

1. Deklarasikan sebuah fungsi bernama `handleClick` di dalam komponen Button kita.
2. Implementasikan logika di dalam fungsi tersebut (gunakan `alert` untuk menampilkan pesan).
3. Tambahkan handler `onClick={handleClick}` ke tag JSX `< button >`

Perhatikan kode `button.tsx` berikut

```
export default function Tombol_1() {
    
    function handleClick(){
        alert("Tombol telah ditekan!!!");
    }
    function handleMouseOver(){
        alert("Eits, mau mencet tombol ya?");
    }

    return (
      <button 
      className=
      "bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      >
        ini tombol
      </button>  

    );
}
```
Maka kita butuh mengatur agar komponen yang kita gunakan menjadi komponen client. Untuk menjadikan komponen client, kita cukup memberikan perintah ini `"use client"`; pada baris pertama file `page.tsx`
```
"use client";
import Tombol_1 from "../components/button";

export default function Home() {
```
### Output Praktikum 1 Langkah 2.1
![Screenshoot](docs/p1l2.1.png) 

Kita mendefinisikan fungsi `handleClick `dan kemudian mengopernya sebagai prop ke `< button >`. Method `handleClick`adalah sebuah event handler pada tombol tersebut.

Nama Method event handler sebaiknya memiliki format tertentu, seperti contoh memiliki nama yang diawali dengan kata handle, diikuti oleh nama event yang akan dilakukan. Contoh

- event handler untuk menangani ketika ada event klik tombol `onClick={handleClick}`,
- event handler untuk menangani ketika ada event `onMouseEnter={handleMouseEnter}`, dan lain sebagainya.
Selain itu, sebagai alternatif, Kita juga dapat mendefinisikan event handler secara inline dalam JSX secara langsung seperti berikut
```
return (
      <button 
      className=
      "bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
      onClick={handleClick}
    //   onMouseOver={handleMouseOver}
    onMouseLeave={() =>{
        alert("Loh, kok sudah pergi!!!")
    }}
      >
        ini tombol
      </button>  

    );
```
### Output Praktikum 1 Langkah 2.2
![Screenshoot](docs/p1l2.2.png) 

# Praktikum 2
Kita buat fungsi baru pada component `button.tsx`
```
export function Tombol_2({ isiPesan, namaTombol }) {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 ☐ text-white p-2 rounded"
            onClick={() => alert(isiPesan)}>
            {namaTombol}
        </button>

    );
}
```
Pada component, hanya ada 1 fungsi yang memiliki `default` !

Parameter `isiPesan` dan `namaTombol` bisa diisi oleh layout yang ada di `page.tsx` nanti, sehingga komponen `Tombol_2` bernilai dinamis.

Sekarang kita modifikasi file `page.tsx` seperti berikut
```
"use client";
import Tombol_1, { Tombol_2 } from "../components/button";
export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <h2>Kuis Kota</h2>
        <Tombol_1 />
        <hr></hr>
        <Tombol_2 isiPesan="Ini Pesanku" namaTombol="Pesan" />
      </div>
    </>
  );
}
```
### Output Praktikum 2
![Screenshoot](docs/p2.1.png) 

![Screenshoot](docs/p2.2.png) 

Coba cek di browser dan amati apa yang terjadi?

Jelaskan mengapa bisa seperti itu?

# Praktikum 3
## Langkah 1 - Propagation
Sebagai contoh coba kita modifikasi file button.tsx seperti berikut
```
export function Tombol_2({ isiPesan, namaTombol}) {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            onClick={() => alert(isiPesan)}>
            {namaTombol}
        </button>
    );
}
export function Tombol_3({isiPesan, namaTombol}){
    return (
        <button
            className="bg-green-400 hover:bg-green-700 text-white p-2 rounded m-2"
            onClick={() => {
                alert(isiPesan)
            }
            }>
            {namaTombol}
        </button>

    );
}

export default function Tombol_1() {
```
Kemudian kita modifikasi fiile `page.tsx`
```
"use client";
import Tombol_1, { Tombol_2, Tombol_3 } from "@/components/button";
export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <h2>Kuis Kota</h2>
        <Tombol_1 />
        <hr></hr>
        <Tombol_2 isiPesan="Ini Pesanku" namaTombol="Pesan" />
      </div>
      <br></br>
      <div className="bg-red-300" onClick={() => alert('Parent Element: Div')}>
        <Tombol_3 isiPesan="Child Element: Tombol-1" namaTombol="Tombol-1" />
        <Tombol_3 isiPesan="Child Element: Tombol-2" namaTombol="Tombol-2" />
      </div>
    </>
  );
}
```
Kemudian kita jalankan di browser, coba klik `Tombol-1`, dan amati apa yang terjadi...!!!

Kita akan disuguhkan dengan pesan/alert sebanyak 2 kali, yaitu Pesan `"Child Element : Tombol-1"` dan pesan `"Parent Element : Div"`.
### Output Praktikum 3 Langkah 1
![Screenshoot](docs/p3l1.1.png) 

![Screenshoot](docs/p3l1.2.png) 

Hal ini terjadi karena baik untuk element `div` maupun `button` memiliki event yang sama yaitu onClick, sehingga ketika button diklik maka event handler untuk onClick pada button akan dijalankan. Kemudian baru event handler dari parent (element div) akan dijalankan.

Hal ini disebut dengan propagation, dan biasa terjadi pada elemen child dan parent yang memiliki event yang sama.

## Langkah 2 - Stop Propagation
```
export function Tombol_3({isiPesan, namaTombol}) {
    return (
        <button
            className="bg-green-400 hover:bg-green-700 text-white p-2 rounded m-2"
            onClick={(e) => {
                e.stopPropagation();
                alert(isiPesan)
            }
            }>
            {namaTombol}
        </button>
    );
}
```
### Output Praktikum 3 Langkah 2
![Screenshoot](docs/p3l2.png) 

# Praktikum 4
## Langkah 1
Kita buat file data dummy untuk mencoba state pada `src/data/article.js` yang berisi seperti berikut
```
export const sculptureList = [{
    name: 'Homenaje a la Neurocirugía',
    artist: 'Marta Colvin Andrade',
    description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
    url: 'https://i.imgur.com/Mx7dA2Y.jpg',
    alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'  
  }, {
    name: 'Floralis Genérica',
    artist: 'Eduardo Catalano',
    description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
    url: 'https://i.imgur.com/ZF6s192m.jpg',
    alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
  }, {
    name: 'Eternal Presence',
    artist: 'John Woodrow Wilson',
    description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
    url: 'https://i.imgur.com/aTtVpES.jpg',
    alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
  }, {
    name: 'Moai',
    artist: 'Unknown Artist',
    description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
    url: 'https://i.imgur.com/RCwLEoQm.jpg',
    alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
  }, {
    name: 'Blue Nana',
    artist: 'Niki de Saint Phalle',
    description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
    url: 'https://i.imgur.com/Sd1AgUOm.jpg',
    alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
  }];
```
Kemudian kita coba buat komponen baru di `src/component/gallery.tsx`
```
import { sculptureList } from '../data/article'; // ambil data yang sudah ada

export default function Gallery() {
    let index = 0; // index data mulai dari 0

    function handleClick() {
        index = index + 1; // counter index + 1, utk melihat data selanjutnya
    }
    let sculpture = sculptureList[index]; // membaca data sesuai dengan index
    return (
        <>
            <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded"> Artikel Selanjutnya </button>

            <h2><i>{sculpture.name} </i> oleh {sculpture.artist} </h2>
            <h3>({index + 1} dari {sculptureList.length}) </h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>
                {sculpture.description}
            </p>
        </>
    );
}
```
Kita panggil komponen tersebut pada page.tsx
```
"use client";
import Tombol_1, { Tombol_2, Tombol_3 } from "../components/button"; 
import Gallery from "../components/gallery";

export default function Home() {
  return (
  <>
    <div className="container mx-auto">
      <h2>Kuis Kota</h2>
      <Tombol_1 />
      <hr></hr>
      <Tombol_2 isiPesan="Ini Pesanku" namaTombol="Pesan" />
    </div>
    <br></br>
    <div className="bg-red-300" onClick={() => alert('Parent Element: Div')}>
      <Tombol_3 isiPesan="Child Element: Tombol-1" namaTombol="Tombol-1" />
      <Tombol_3 isiPesan="Child Element: Tombol-2" namaTombol="Tombol-2" />
    </div>
    <br></br>
    <Gallery />
  </>
);
}
```
Sekarang coba di browser dan klik tombol "Artikel Selanjutnya" dan perhatikan apa yang terjadi...!!!
### Output Praktikum 4 Langkah 1
![Screenshoot](docs/p4l1.png) 
Ya, tidak terjadi apa-apa 😀

## Langkah 2 - Menambahkan variabel state
Untuk menambahkan variabel state, impor useState dari React di paling atas file `src/components/gallery.tsx`
```
import { useState } from 'react';
```
Lalu, ubah baris berikut:
```
let index = 0;
```
menjadi
```
const [index, setIndex] = useState(0); 
```
index merupakan variabel state dan setIndex adalah fungsi setter.

Ubah fungsi dalam handleClick menjadi seperti ini
```
function handleClick() {
setIndex(index + 1); // counter index + 1, utk melihat data selanjutnya
}
```
Maka kode pada `gallery.tsx` seperti berikut
```
import { useState } from 'react';
import { sculptureList } from '../data/article'; // ambil data yang sudah ada

export default function Gallery() {
    const [index, setIndex] = useState(0);

    function handleClick() {
        setIndex(index + 1); // counter index + 1, utk melihat data selanjutnya
    }
    let sculpture = sculptureList[index]; // membaca data sesuai dengan index
    return (
        <>
            <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded"> Artikel Selanjutnya </button>

            <h2><i>{sculpture.name} </i> oleh {sculpture.artist} </h2>
            <h3>({index + 1} dari {sculptureList.length}) </h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>
                {sculpture.description}
            </p>
        </>
    );
}
```
Jalankan pada browser dan amati apa yang terjadi.
### Output Praktikum 4 Langkah 2
![Screenshoot](docs/p4l2.1.png) 
![Screenshoot](docs/p4l2.2.png) 
![Screenshoot](docs/p4l2.3.png) 
![Screenshoot](docs/p4l2.4.png) 
![Screenshoot](docs/p4l2.5.png) 
Yang terjadi yaitu tombol bisa dipencet dan menuju slide article selanjutnya.

# Praktikum 5
## Langkah 1
Kita buat komponen baru `src/components/form.tsx`
```
import { useState } from "react";

export default function form() {
    const [jawaban, setJawaban] = useState('');
    const [error, setError] = useState(null);
    const [status, setstatus] = useState('typing');

    if (status === 'success') {
        return <h1>Yay... Jawaban Benar!</h1>
    }

    async function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(jawaban);
            setStatus('success');
        } catch (err) {
            setstatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setJawaban(e.target.value);
    }

    return (
        <>
            <div className="w-full max-w-xs">
                <h2>Tebak Nama Hewan</h2>
                <p>Hewan apa yang ditakuti oleh doraemon?</p>
                <form
                    className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black border-gray-400"
                    onSubmit={handleSubmit}>
                    <textarea
                        value={jawaban}
                        onChange={handleTextareaChange}
                        disabled={status === 'submitting'}
                    />
                    <br />
                    <button
                        className="bg-blue-400 p-2 m-2 rounded text-smtext-white"
                        disabled={jawaban.length === 0 || status === 'submitting'}>
                        Submit
                    </button>
                    {error !== null && <p className="Error text-red-500 text-sm">{error.message}</p>}
                </form>
            </div >
        </>
    );
}
function submitForm(jawaban) {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            let shouldError = jawaban.toLowerCase() !== 'tikus'
            if (shouldError) {
                reject(new Error('Tebakan yang bagus tetapi jawaban salah. Silahkan coba lagi!'));
            } else {
            }
            resolve();
        }, 500); // set timeout selama 0,5 detik
    });
}
```
Kemudian kita tambahkan kode pada file `page.tsx`
```
"use client";
import Tombol_1, { Tombol_2, Tombol_3 } from "../components/button"; 
import Gallery from "../components/gallery";
import Form from "../components/form";

export default function Home() {
  return (
  <>
    <div className="container mx-auto">
      <h2>Kuis Kota</h2>
      <Tombol_1 />
      <hr></hr>
      <Tombol_2 isiPesan="Ini Pesanku" namaTombol="Pesan" />
    </div>
    <br></br>
    <div className="bg-red-300" onClick={() => alert('Parent Element: Div')}>
      <Tombol_3 isiPesan="Child Element: Tombol-1" namaTombol="Tombol-1" />
      <Tombol_3 isiPesan="Child Element: Tombol-2" namaTombol="Tombol-2" />
    </div>
    <br></br>
    <Gallery />
    <br></br>
    <Form/>
  </>
);
}
```
Jalankan pada browser, amati dan laporkan apa yang terjadi..!!
### Output Praktikum 5 Langkah 1
![Screenshoot](docs/p5l1.png) 

## Langkah 2
Kita tambahkan kode berikut pada `src/component/form.tsx`
```
export function Form_2() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
        setFullName(e.target.value + ' ' + lastName);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
        setFullName(firstName + ' ' + e.target.value);
    }

    return (
        <>
            <h2>Silahkan isi nama lengkap anda</h2>
            <label className="block w-full m-2">
                Nama depan:
                <input className="text-sm value={firstName} text-black ml-2 rounded"
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>

            <label className="block w-full m-2">
                Nama belakang:
                <input className="text-sm value={lastName} text-black ml-2 rounded"
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <p>Nama lengkap Anda adalah : <b className="text-blue-600">{fullName}</b></p>
        </>
    );
}
```
Kemudian tambahkan ke `page.tsx`
```
    <br></br>
    <Gallery />
    <br></br>
    <Form/>
    <br></br>
    <Form_2/>
  </>
);
}
```
Coba perhatikan dan implementasikan kode berikut pada `src/component/form.tsx`
```
export function Form_2() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
        setFullName(e.target.value + ' ' + lastName);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
        setFullName(firstName + ' ' + e.target.value);
    }
```
Jalankan pada browser dan amati apa yang terjadi.
### Output Praktikum 5 Langkah 2
![Screenshoot](docs/p5l2.png)

# Praktikum 6
## Langkah 1
Kita buat file komponen pada `src/components/accordion.tsx`
```
import { useState } from "react";

export default function Accordion() {
    const [activateIndex, setActivateIndex] = useState(0);
    return(
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Panel
                title="About"
                isActive={activateIndex === 0}
                onShow={() => setActivateIndex(0)}>
                Dengan populasi sekitar 2 juta orang, Almaty adalah kota terbesar di Kazakhstan.
                Dari tahun 1929 hingga 1997, kota ini menjadi ibu kota Kazakhstan.
            </Panel>
            <Panel
                title="Etymology"
                isActive={activateIndex === 1}
                onShow={() => setActivateIndex(1)}>
                Nama "Almaty" berasal dari kata <span lang="kk-KZ">anma</span>, dalam bahasa Kazakh yang berarti "apel" dan
                sering diterjemahkan sebagai "penuh dengan apel". Sebenarnya, wilayah sekitar Almaty dipercaya sebagai
                asal usul apel, dan <i lang="la">Malus sieversii</i> liar dianggap sebagai kandidat
                yang mungkin menjadi nenek moyang apel domestik modern.
            </Panel>
        </>
    )
}

function Panel({title, children, isActive, onShow}) {
    return (
        <section className="panel border boder-gray-700 p-2">
            <h3>{title}</h3>
            {isActive ? ( <p>{children}</p>) : (<button className="bg-blue-400 text-xs text-white p-1 rounded m-2" onClick={onShow}>Tampilkan</button>)}
        </section>
    )
}
```
Lalu kita tambahkan component Accordion ke file page.tsx
```
    <br></br>
    <Form_2/>
    <br></br>
    <Accordion />
  </>
);
}
```
### Output Praktikum 6 Langkah 1
![Screenshoot](docs/p6l1.png)

Amati dan laporkan apa yang terjadi...!!!

## Langkah 2
Kita buat file di `src/components/chat.tsx`
```
import { useState } from "react";

const contacts = [
    { name : 'Taylor', email: 'taylor@mail.com' },
    { name : 'Alice', email: 'alice@mail.com' },
    { name : 'Bob', email: 'bob@mail.com' }
];

export function ContactList({selectedContact, contacts, onSelect}){
    return(
        <section className="contact-list">
            <ul className="w-full">
                {contacts.map (contact =>
                    <li key={contact.email}>
                    <button
                        className="text-xs bg-bue-400 rounded p-1 m-2 text-white"
                        onClick={() => {onSelect(contact)}}>
                        {contact.name}
                    </button>
                    </li>
                )}
            </ul>
        </section>
    );
}

export function Chat({ contact }){
    const [text, setText] = useState('');
    return(
        <section className="chat m-2">
            <textarea 
                rows={5}
                value={text}
                placeholder={'Mengobrol dengan ' + contact.name}
                onChange={e => setText(e.target.value)}
            />
            <br />
            <button className="text-xs bg-gray-400 rounded px-2 py-1 m-2 text-blue-800">Kirim ke {contact.email}</button>
        </section>
    );
}

export default function Messenger() {
    const[to, setTo] = useState(contacts[0]);
    return(
        <div>
            <table className="w-1/2 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs tex-gray-700-uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">List Kontak</th>
                        <th scope="col" className="px-6 py-4">Pesan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ContactList
                                contacts={contacts}
                                selectedContact={to}
                                onSelect={contact => setTo(contact)}
                            />
                        </td>
                        <td>
                            <Chat key={to.email} contact={to} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
```
Perhatikan fungsi Messenger, dan ubah baris kode ini
```
contact={to} />
```
Menjadi
```
key={to.email} contact={to} />
```
Coba jalankan kembali pada browser, amati dan laporkan perbedaannya.
### Output Praktikum 6 Langkah 2
![Screenshoot](docs/p6l2.png)