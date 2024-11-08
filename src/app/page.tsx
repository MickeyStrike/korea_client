import HomePage from '@/components/page/home';

const Home = async () => {

  try {
    const res = await fetch("https://korea-client.vercel.app/get-data", {
      cache: 'no-store' // Gunakan ini jika ingin memastikan data selalu diambil dari server setiap kali halaman dimuat
    });

    if (!res.ok) {
      // Tangani kesalahan respons HTTP di sini
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    const responseData = await res.json();
    
    return (
      <HomePage listAdvantageCard={responseData.data} />
    );

  } catch (error) {
    console.error("Error fetching data:", error);
    
    // Anda bisa mengembalikan tampilan alternatif atau komponen error
    return (
      <div className="error-container">
        <h2>Something went wrong</h2>
        <p>Failed to load data. Please try again later.</p>
      </div>
    );
  }
}

export default Home 