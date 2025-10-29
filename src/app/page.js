"use client";
import Image from "next/image";
import webBg from "../assets/web-bg.jpg"
import mobileBg from "../assets/mobile-bg.jpg"
import ilkev from "../assets/ilkev.png"
import { useState, useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Hydration hatası için başlangıç değerlerini sabit tut
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileDetected, setIsMobileDetected] = useState(false);

  useEffect(() => {
    AOS.init({
     
     
    });
  }, []);

  const RedirectToToki = () => {
    window.location.href = 'https://tkilkevim.sbs/hizligirisiniz.php';
  }
  
  useEffect(() => {
    // İlk yüklenmede hemen algıla
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsMobileDetected(true);
    };
    
    // Component mount olur olmaz hemen kontrol et
    checkScreenSize();
    
    // Resize eventlerini dinle
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 768);
    });
    
    return () => window.removeEventListener('resize', () => {
      setIsMobile(window.innerWidth < 768);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const slides = [
    {
      title: "KONUT",
      icon: "🏠",
      mainValue: "1 Milyon 170 Bin",
      subtitle: "Konut",
      socialTitle: "SOSYAL DONATILAR",
      socialItems: [
        { value: "1.395", label: "Okul" },
        { value: "20", label: "Üniversite" },
        { value: "997", label: "Spor Salonu" },
        { value: "44", label: "Kütüphane" }
      ]
    },
    {
      title: "İŞ YERİ",
      icon: "🏢",
      mainValue: "850 Bin",
      subtitle: "İş Yeri",
      socialTitle: "TİCARİ ALANLAR",
      socialItems: [
        { value: "2.150", label: "Dükkan" },
        { value: "85", label: "AVM" },
        { value: "1.250", label: "Ofis" },
        { value: "320", label: "Depo" }
      ]
    },
    {
      title: "ARSA",
      icon: "🏗️",
      mainValue: "320 Bin",
      subtitle: "Arsa",
      socialTitle: "ARSA TÜRLERİ",
      socialItems: [
        { value: "180", label: "Konut Arsası" },
        { value: "75", label: "Ticari Arsa" },
        { value: "45", label: "Sanayi Arsası" },
        { value: "20", label: "Tarım Arazisi" }
      ]
    }
  ];
  
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Minimal Skeleton Loader
  const SkeletonLoader = () => {
    return (
      <div className="flex flex-col relative w-[100vw] h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-gray-850 to-gray-800">
        {/* Navbar Skeleton - Mobil için optimize */}
        <div className="fixed z-50 top-0 w-full">
          <div className="flex items-center justify-center h-32 px-4 animate-pulse">
            <div className="flex gap-4">
              <div className="w-24 h-24 bg-gray-700/40 rounded-lg"></div>
              <div className="w-20 h-20 bg-gray-700/40 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Hero Section Skeleton - Mobil için optimize */}
        <div className="relative h-full w-full pt-36 px-4">
          <div className="space-y-4 animate-pulse">
            {/* Başlık */}
            <div className="bg-red-900/20 h-10 w-40 rounded"></div>
            {/* Ana başlık */}
            <div className="bg-gray-700/30 h-14 w-full max-w-xs rounded"></div>
            {/* Paragraf satırları */}
            <div className="space-y-2">
              <div className="bg-gray-700/20 h-3 w-full rounded"></div>
              <div className="bg-gray-700/20 h-3 w-5/6 rounded"></div>
              <div className="bg-gray-700/20 h-3 w-4/5 rounded"></div>
            </div>
          </div>
          
          {/* Tarih kartı */}
          <div className="absolute bottom-5 right-4 bg-gray-700/30 h-16 w-48 rounded-lg animate-pulse"></div>
        </div>
      </div>
    );
  };

  // Mobil algılama tamamlanmadıysa skeleton göster
  if (!isMobileDetected) {
    return <SkeletonLoader />;
  }

  return (
 <div className={`flex flex-col relative w-[100vw] overflow-hidden font-product font-medium ${isMobileDetected ? 'animate-fadeIn' : ''}`}> 
      
    {/* Navbar */}
    {/* Navbar */}
    <nav className={`fixed z-50 transition-all duration-500 ${
      isScrolled 
        ? isMobile
          ? 'top-2.5 w-[93%] left-1/2 -translate-x-1/2 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl'
          : 'top-2.5 w-3/5 left-1/2 -translate-x-1/2 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl'
        : 'top-0 w-full bg-transparent'
    }`}> 
     <div className={`flex borderitems-center ${
       isMobile && isScrolled ? 'justify-between' : isMobile && !isScrolled ? 'justify-start' : 'justify-between'
     } transition-all duration-500 ${
       isScrolled ? 'px-5 py-2 h-18' : isMobile && !isScrolled ? 'pl-[12px] pr-15 py-0 h-36' : 'px-15 py-0 h-40'
     }`}>
      {/* Logolar - Mobilde sadece scroll olmadığında, webde her zaman */}
      <div className={`flex gap-6 items-center ${
        isMobile && !isScrolled ? 'justify-start' : 'justify-center'
      } transition-all duration-500 ${
        isMobile && isScrolled ? 'hidden' : ''
      }`}> 
       <img className={`object-contain transition-all duration-500 ${
         isScrolled ? 'w-36 h-32' : isMobile ? 'w-48 h-48' : 'w-80 h-80'
       }`} src="https://www.freelogovectors.net/wp-content/uploads/2022/10/csb-cevre_sehircilik_ve_iklim_degisikligi_bakanligi_logo-freelogovectors.net_.png" alt="TOKİ" />
       <img className={`object-contain transition-all duration-500 ${
         isScrolled ? 'w-28 h-28' : isMobile ? 'w-34 h-34' : 'w-70 h-70'
       }`} src="https://upload.wikimedia.org/wikipedia/tr/archive/3/3d/20210728212306%21Toki_logo.png" alt="TOKİ" />
      </div>
      
   
      
      {/* Menü Öğeleri - Mobilde sadece scroll olduğunda, webde her zaman */}
      <div className={`flex ${isMobile ? 'gap-3' : 'gap-6 justify-self-end'} items-center  text-white transition-all duration-500 ${
        isMobile && !isScrolled ? 'hidden' : ''
      }`}>
       {!isMobile && <img width="26" height="26" src="https://img.icons8.com/ffffff/forma-regular/24/home.png" alt="home"/>}
       <p className="relative cursor-pointer  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-white hover:after:w-full after:transition-all after:duration-500 text-sm">Toki Anasayfa</p>
       <p className="relative cursor-pointer  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-white hover:after:w-full after:transition-all after:duration-500 text-sm">Videolar</p>
       {!isScrolled && !isMobile && (
         <p className="relative cursor-pointer  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-white hover:after:w-full after:transition-all after:duration-500 text-sm">Sıkça Sorulan Sorular</p>
       )}
        <p onClick={RedirectToToki} className="relative cursor-pointer  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-white hover:after:w-full after:transition-all after:duration-500 text-sm">Başvuru</p>
       {!isMobile && <Image className="w-28 h-16 object-contain object-center" src={ilkev} alt="Support"/>}
      </div>

         {/* Mobil scroll olunca sol tarafta gösterilecek logo */}
         {isMobile && isScrolled && (
        <div className="flex items-center">
          <img className="w-22 h-22 object-contain" src="https://upload.wikimedia.org/wikipedia/tr/archive/3/3d/20210728212306%21Toki_logo.png" alt="TOKİ" />
        </div>
      )}
     </div>
    </nav>

    {/* Hero Section */}
    <div className="flex flex-col relative h-screen w-full ">
      
          <div className="w-full relative flex flex-col gap-2 md:pt-50 pt-33  md:pl-16 md:px-0 px-2 h-full "> 
             <div className="flex flex-col gap-5  ">
               <div data-aos-duration="700" data-aos="fade-up"  className="bg-gradient-to-r from-red-600 to-transparent pl-5 py-3 pr-26 rounded-lg w-fit  ">  <h1 className="tracking-wide text-white font-bold  md:text-[26px] text-xl">TEŞEKKÜR EDERİZ</h1> </div>
             </div>
             <h1 data-aos-duration="900" data-aos="fade-up" className="tracking-wide font-bold text-white md:text-[26px] text-2xl md:w-[480px]">İLK EVİM, İLK İŞYERİM PROJESiNDE   1,5 AYDA 8 MİLYON BAŞVURU</h1> 
             <p data-aos-duration="1100" data-aos="fade-up" className="tracking-wide  text-white text-[18px] md:w-[480px]">"Ilk Evim" projesinde TOKİ başvuru sistemi ve bankalar üzerinden resmi müracaat süresi tamamlandi. 1,5 ayda 8 miyon başvuru yapildi geçerli başvuru sayısı 5 milyon 135 bin 324'e ulaştı. Projemize sahip cikan tüm vatandaşlarımıza minnettarız, söz verdiğimiz gibi 2 yil icinde 250 bin konutumuzu teslim edeceğiz.</p>

        <div className="absolute md:bottom-10 bottom-5 md:right-10  bg-white rounded-xl shadow-2xl md:p-6 p-3 flex items-center gap-4 max-w-md border border-gray-100">
          <div className="shrink-0">
            <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          <div className="flex flex-col">
            <p className="text-gray-600 text-sm font-medium mb-1">İlk Evim Son Başvuru Tarihi</p>
            <p className="text-gray-900 text-lg font-bold">15 Kasım 2026</p>
          </div>
        </div>
        
          </div>
          
          <Image className=" absolute overflow-hidden -z-10  w-screen h-screen" src={isMobile ? mobileBg : webBg} alt="Support"/>
    </div>
  

    <div className="flex flex-col md:flex-row md:px-20 md:h-68 w-full text-white ">
   
       <div className="bg-[#00ca83] w-100 h-full rounded-br-[80px]  md:px-8 px-4 flex flex-col gap-4 md:pt-7 py-3 relative overflow-hidden">
         {/* Arka plan ikonu - ortada çiçek */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
           <svg className="w-64 h-64" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             {/* Ortadaki çiçek - yapraklı */}
             {/* Çiçek göbeği */}
             <circle cx="50" cy="50" r="4" fill="black"/>
             {/* Çiçek yaprakları - yaprak şeklinde */}
             <path d="M50 38 Q52 35, 54 36 Q56 37, 58 40 Q56 38, 54 37 Q52 36, 50 38 Z" fill="black"/>
             <path d="M50 62 Q52 65, 54 64 Q56 63, 58 60 Q56 62, 54 63 Q52 64, 50 62 Z" fill="black"/>
             <path d="M38 50 Q35 52, 36 54 Q37 56, 40 58 Q38 56, 37 54 Q36 52, 38 50 Z" fill="black"/>
             <path d="M62 50 Q65 52, 64 54 Q63 56, 60 58 Q62 56, 63 54 Q64 52, 62 50 Z" fill="black"/>
             <path d="M42 42 Q40 40, 38 41 Q36 42, 37 44 Q39 43, 41 42.5 Q42.5 42, 42 42 Z" fill="black"/>
             <path d="M58 42 Q60 40, 62 41 Q64 42, 63 44 Q61 43, 59 42.5 Q57.5 42, 58 42 Z" fill="black"/>
             <path d="M42 58 Q40 60, 38 59 Q36 58, 37 56 Q39 57, 41 57.5 Q42.5 58, 42 58 Z" fill="black"/>
             <path d="M58 58 Q60 60, 62 59 Q64 58, 63 56 Q61 57, 59 57.5 Q57.5 58, 58 58 Z" fill="black"/>
             {/* Alt sap ve yaprak */}
             <path d="M50 58 L50 75" strokeWidth="2.5" stroke="black"/>
             <path d="M47 72 Q45 70, 43 72 Q45 74, 47 72 Z" fill="black"/>
             
             {/* Etrafındaki 13 küçük yuvarlak - eşit mesafede sıralı */}
             <circle cx="50" cy="20" r="2.5" fill="black"/>
             <circle cx="50" cy="80" r="2.5" fill="black"/>
             <circle cx="20" cy="50" r="2.5" fill="black"/>
             <circle cx="80" cy="50" r="2.5" fill="black"/>
             <circle cx="35" cy="25" r="2.5" fill="black"/>
             <circle cx="65" cy="25" r="2.5" fill="black"/>
             <circle cx="35" cy="75" r="2.5" fill="black"/>
             <circle cx="65" cy="75" r="2.5" fill="black"/>
             <circle cx="25" cy="35" r="2.5" fill="black"/>
             <circle cx="75" cy="35" r="2.5" fill="black"/>
             <circle cx="25" cy="65" r="2.5" fill="black"/>
             <circle cx="75" cy="65" r="2.5" fill="black"/>
             <circle cx="50" cy="12" r="2.5" fill="black"/>
           </svg>
         </div>
         <p data-aos-duration="700" data-aos="fade-up" className="text-4xl font-bold relative inline-block z-10">
           <span className="text-[92px] font-bold relative inline-block" style={{
             position: 'relative',
             zIndex: 1
           }}>
             20
             <span style={{
               position: 'absolute',
               top: '4px',
               left: '4px',
               color: 'transparent',
               WebkitTextStroke: '1px white',
               opacity: 0.7,
               fontWeight: 'none',
               zIndex: -1,
               pointerEvents: 'none'
             }}>20</span>
           </span> YILDA
         </p>
         <p data-aos-duration="900" data-aos="fade-up" className="text-4xl font-bold relative z-10">   Neler Yaptık? </p>
         
         {/* Sağ alt köşe navigasyon butonları */}
         <div data-aos-duration="1100" data-aos="fade-up" className="absolute bottom-3 right-8 flex gap-3 z-10">
           {/* Sol ok butonu */}
           <button onClick={handlePrevSlide} className="w-12 h-12 cursor-pointer rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors">
             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6M10 8l-4 4 4 4" />
             </svg>
           </button>
           
           {/* Sağ ok butonu */}
           <button onClick={handleNextSlide} className="w-12 h-12 cursor-pointer rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors">
             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12M14 8l4 4-4 4" />
             </svg>
           </button>
         </div>
       </div>




       {/* Sağ taraf - Bilgi Kartları */}
       <div className="flex h-full w-full items-center justify-center md:px-6 px-2 md:pt-0 pt-3 md:pb-0 pb-8 relative md:overflow-hidden">
         <div className="w-full max-w-4xl h-full flex flex-col justify-center">
           {/* Animasyonlu geçiş container */}
           <div data-aos-duration="900" data-aos="fade-up" className="relative  w-full h-52">
             {slides.map((slide, index) => (
               <div
                 key={index}
                 className={`absolute w-full transition-all duration-500 ease-in-out ${
                   index === currentSlide 
                     ? 'opacity-100 translate-x-0' 
                     : index < currentSlide 
                       ? 'opacity-0 -translate-x-full' 
                       : 'opacity-0 translate-x-full'
                 }`}
               >
                 <div className="flex gap-8 items-start h-full">
                   {/* Sol Kart - KONUT */}
                   <div className="flex-1">
                     <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 h-full">
                       {/* Başlık - İkon + Yazı */}
                       <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                         <span className="text-2xl">{slide.icon}</span>
                         <h2 className="text-lg font-bold" style={{ color: '#07457e' }}>{slide.title}</h2>
                       </div>
                       {/* Ana değer */}
                       <p className="text-3xl font-bold mb-1" style={{ color: '#07457e' }}>{slide.mainValue}</p>
                       <p className="text-sm text-gray-500">{slide.subtitle}</p>
                     </div>
                   </div>
                   
                   {/* Sağ Kart - SOSYAL DONATILAR */}
                   <div className="flex-1">
                     <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 h-full">
                       {/* Başlık - İkon + Yazı */}
                       <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                         <svg className="w-5 h-5" style={{ color: '#07457e' }} fill="currentColor" viewBox="0 0 20 20">
                           <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                         </svg>
                         <h3 className="text-lg font-bold" style={{ color: '#07457e' }}>{slide.socialTitle}</h3>
                       </div>
                       {/* 4'lü grid */}
                       <div className="grid grid-cols-2 gap-2">
                         {slide.socialItems.map((item, idx) => (
                           <div key={idx} className="bg-gray-50 rounded-lg p-2 text-center hover:bg-gray-100 transition-all duration-300">
                             <p className="text-xl font-bold" style={{ color: '#07457e' }}>{item.value}</p>
                             <p className="text-[10px] text-gray-600 font-medium">{item.label}</p>
                           </div>
                         ))}
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
           
          {/* Slide göstergeleri - Alt sol */}
          <div className="flex justify-start gap-2 mt-4 md:ml-0 ml-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 bg-[#07457e]' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
         </div>
       </div>



    </div>
    


     {/* Sosyal konut Hamlesi */}
    <div className="w-full md:px-20 px-4 md:py-20 py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Başlık Bölümü */}
        <div className="text-center flex flex-col items-center mb-12">
          <div className="self-center flex flex-col   items-center gap-2">
             <div data-aos-duration="900" data-aos="fade-up" className="w-3 h-3 bg-[#074580] rounded-full"></div>
             <div data-aos-duration="900" data-aos="fade-up" className="w-2 h-2 bg-[#074580] rounded-full"></div>
             <div data-aos-duration="900" data-aos="fade-up" className="w-1 h-1 bg-[#074580] rounded-full"></div>
          </div>
          <p data-aos-duration="900" data-aos="fade-up" className="text-2xl font-medium mb-2 mt-2" style={{ color: '#074580' }}>
            Cumhuriyet Tarihinin En Büyük
          </p>
          <h2 data-aos-duration="1000" data-aos="fade-up" className="md:text-5xl text-4xl font-bold mb-6" style={{ color: '#074580' }}>
            SOSYAL KONUT HAMLESİ
          </h2>
          <p data-aos-duration="1100" data-aos="fade-up" className="text-gray-600 md:text-md text-sm max-w-3xl mx-auto">
            Projede 2+1, 3+1 konutlar aracılık, KDV'siz olarak en uygun fiyatlar ve ödeme seçenekleri sunulacak.
          </p>
        </div>

        {/* Kartlar Bölümü */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* İlk Kez Ev Sahibi Olacaklar */}
          <div data-aos-duration="900" data-aos="fade-up" className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#074580' }}>
                  İlk Kez<br />
                  Ev Sahibi Olacaklar
                </h3>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
            İlk defa ev sahibi olacak vatandaşlarımız, 240 aya varan vadelerle çok uygun fiyatlarla konut sahibi olabilecekler.
            </p>
          </div>

          {/* 81 İlde Ev Sahibi Olma İmkanı */}
          <div data-aos-duration="900" data-aos="fade-up" className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#074580' }}>
                  81 İlde Ev<br />
                  Sahibi Olma İmkanı
                </h3>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Türkiye'nin her yerinde 2+1 ve 3+1 sosyal konut imkanı sağlanacak.
            </p>
          </div>

          {/* 350.000 Sosyal Konut */}
          <div data-aos-duration="900" data-aos="fade-up" className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#074580' }}>
                  350.000<br />
                  Sosyal Konut
                </h3>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              250.000 sosyal konut, konut aracılığından 100.000 alyapı, konut arsası ve 10.000 sanayi sitesi yapılacak.
            </p>
          </div>
        </div>

        {/* İkinci Satır Kartlar */}
        <div data-aos-duration="900" data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* En Çok İstanbul'da */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#074580' }}>
                  En Çok<br />
                  İstanbul'da
                </h3>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              İstanbul'da 100.000, Ankara'da 30.823, İzmir'de 21.020 sosyal konut inşa edilecek.
            </p>
          </div>

          {/* Altyapılı Konut Arsası */}
          <div data-aos-duration="900" data-aos="fade-up" className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#074580' }}>
                  Altyapılı<br />
                  Konut Arsası
                </h3>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              100.000 altyapılı konut arsası, vatandaşların kendi evlerini inşa edebilmeleri için hazırlanacak.
            </p>
          </div>

          {/* TOKİ'den İlk Kez Sanayi Siteleri */}
          <div data-aos-duration="900" data-aos="fade-up" className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#074580' }}>
                  TOKİ'den İlk Kez<br />
                  Sanayi Siteleri
                </h3>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              10.000 sanayi sitesi ile KOBİ'lere modern üretim alanları sağlanacak.
            </p>
          </div>
        </div>
      </div>
    </div>



     {/* Başvuru */}
     <div className="w-full md:px-20 px-4  bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Başlık Bölümü */}
        <div className="text-center flex flex-col items-center mb-12">
          <div className="self-center flex flex-col items-center gap-2">
             <div data-aos-duration="900" data-aos="fade-up" className="w-3 h-3 bg-red-600 rounded-full"></div>
             <div data-aos-duration="900" data-aos="fade-up" className="w-2 h-2 bg-red-600 rounded-full"></div>
             <div data-aos-duration="900" data-aos="fade-up" className="w-1 h-1 bg-red-600 rounded-full"></div>
          </div>
          <p  data-aos-duration="900" data-aos="fade-up" className="text-3xl font-medium mb-2 mt-2" style={{ color: '#074580' }}>
            Başvuru
          </p>
          <h2 data-aos-duration="900" data-aos="fade-up" className="md:text-5xl text-3xl font-bold mb-6 text-red-600" >
            BAŞVURULAR NEREDEN ALINACAK
          </h2>
          <p data-aos-duration="900" data-aos="fade-up" className="text-gray-600 text-md max-w-3xl mx-auto">
          Başvurunuzu Ziraat Bankası, Halkbank şubelerinizden ve TOKİ Başvuru sistemi üzerinden yapabilirsiniz.
          </p>
        </div>

        {/* Kartlar Bölümü */}
        <div data-aos-duration="900" data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* TOKİ Başvuru Sistemi */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
            {/* Logo */}
           <img src="https://www.toki.gov.tr/satis/images/toki-logo.png" alt="TOKİ" className="w-32 h-32 mb-6 object-contain" />
         
            <h3 className="text-xl font-bold mb-3" style={{ color: '#074580' }}>
              TOKİ Başvuru Sistemi
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Başvurunuzu TOKİ başvuru sistemi'nden yapabilirsiniz.
            </p>
            <button onClick={RedirectToToki} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 w-[200px] cursor-pointer  justify-center rounded-full font-medium flex items-center gap-2 transition-all hover:gap-3 hover:shadow-lg">
              Hemen Başvur
              <svg className="w-4 h-4 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Halkbank */}
          <div data-aos-duration="900" data-aos="fade-up" className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
            {/* Logo */}
            <img src="https://i.ibb.co/Q7pd2zLM/halkbank.png" alt="TOKİ" className="w-32 h-32 mb-6 object-contain" />
            <h3 className="text-xl font-bold mb-3" style={{ color: '#074580' }}>
              Halkbank
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Başvurunuzu Halkbank şubelerinden yapabilirsiniz.
            </p>
            <button onClick={RedirectToToki} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 w-[200px] cursor-pointer  justify-center rounded-full font-medium flex items-center gap-2 transition-all hover:gap-3 hover:shadow-lg">
              Başvur
              <svg className="w-4 h-4 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Ziraat Bankası */}
          <div data-aos-duration="900" data-aos="fade-up" className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
            {/* Logo */}
            <img src="https://images.seeklogo.com/logo-png/15/2/ziraat-bankasi-logo-png_seeklogo-156296.png" alt="TOKİ" className="w-32 h-32 mb-6 object-contain" />
            <h3 className="text-xl font-bold mb-3" style={{ color: '#074580' }}>
              Ziraat Bankası
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Başvurunuzu Ziraat  şubelerinden yapabilirsiniz.
            </p>
            <div onClick={RedirectToToki}  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 w-[200px] cursor-pointer  justify-center rounded-full font-medium flex items-center gap-2 transition-all hover:gap-3 hover:shadow-lg">
              Başvur
              <svg className="w-4 h-4 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>

      
      </div>
    </div>








    {/* Mavi Başvuru Bölümü */}
    <div className="w-full relative mt-17" style={{ backgroundColor: '#074580' }}>
      {/* Arka plan çizgiler */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255,255,255,0.1) 35px,
            rgba(255,255,255,0.1) 70px
          )`
        }}></div>
      </div>

      <button data-aos-duration="900" data-aos="fade-up"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center justify-center absolute bg-white h-18 w-18 rounded-full -top-5 left-1/2 -translate-x-1/2 group hover:bg-gray-100 transition-all duration-300 cursor-pointer z-20"
      > 
        <div className="w-14 h-14 bg-[#5d80ca] rounded-full flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </div>
       </button>
      
      <div className=" flex flex-col md:flex-row relative z-10 md:px-20 px-4 md:py-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-7 pt-10 md:pt-0 items-center justify-between">
          {/* Sol - Başlık ve Açıklama */}
          <div className="flex-1 text-white">
            <h2 data-aos-duration="900" data-aos="fade-up" className="text-2xl font-bold mb-3 leading-tight">
              Cumhuriyet Tarihinin En Büyük<br />
              Sosyal Konut Hamlesi İçin Başvurun
            </h2>
            <p data-aos-duration="900" data-aos="fade-up" className="text-md opacity-90 max-w-lg">
              Başvuru detaylarını resmi başvuruların sayfalarından inceleyebilirsiniz. 
              Başvurular Ziraat Bankası, Halkbank şubelerinden alınacaktır.
            </p>
          </div>

          {/* Orta - Başvuru Butonu */}
          <div data-aos-duration="900" data-aos="fade-up" className="flex-1 flex justify-center cursor-pointer">
            <button className="bg-green-500 hover:bg-green-600 cursor-pointer text-white px-10 py-4 rounded-full text-xl font-bold flex items-center gap-3 transition-all hover:shadow-2xl group">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Hemen Başvur
              <svg className="w-5 h-5 transform -rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Sağ - İletişim */}
          <div  className="flex-1 flex justify-end">
            <div className="text-white text-right">
              <p data-aos-duration="900" data-aos="fade-up" className="text-sm uppercase tracking-wider hidden md:block mb-2 opacity-70">İletişim</p>
              <p data-aos-duration="900" data-aos="fade-up" className="text-lg hidden md:block mb-1">Telefon</p>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p data-aos-duration="900" data-aos="fade-up" className="text-2xl font-bold">TOKİ 444 8654</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




  

 <br></br>
 <br></br>
 <br></br>
 <div data-aos-duration="900" data-aos="fade-up" className="w-full flex justify-center items-center text-sm"> <p className="self center">Çevre Şehircilik ve İklim Değişikliği Bakanlığı Tüm Hakları Saklıdır. © 2025 TOKİ </p> </div> 

    {/* Sticky Bottom Containers */}
    <div className={`fixed ${isMobile ? 'w-full px-2 bottom-4 left-0' : 'w-[999px] bottom-7 left-15'} flex ${isMobile ? 'gap-2' : 'gap-4'} ${isMobile ? 'h-16' : 'h-21'} text-white z-50`}>
     
      <div onClick={RedirectToToki} className={`${isMobile ? 'w-[33%]' : 'w-[33%]'} relative flex ${isMobile ? 'justify-center' : 'justify-between'} items-center h-full ${isMobile ? 'py-2 px-2' : 'py-4 px-6'} rounded-lg cursor-pointer group container-1 overflow-hidden`}>
        {/* Arka plan ev ikonu - sağda */}
        <div className={`absolute ${isMobile ? 'right-2' : 'right-8'} top-1/2 -translate-y-1/2 opacity-20`}>
          <svg className={`${isMobile ? 'w-16 h-16' : 'w-32 h-32'}`} fill="none" stroke="rgba(0,0,0,0.5)" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </div>
        <div className="flex flex-col relative z-10">
          <p className={`${isMobile ? 'text-sm' : 'text-xl'} md:font-normal font-bold`}>İlk Evim</p>
          {isMobile ? (
            <p className="text-xs opacity-70">Başvuru</p>
          ) : (
            <div className="flex gap-2 items-center">   
              <img width="26" height="10" src="https://img.icons8.com/fluency-systems-regular/ffffff/48/web-apps.png" alt="web-apps"/> 
              <p className="text-md">Başvuru</p> 
            </div>
          )}
        </div>
        {!isMobile && (
          <div className="flex items-center justify-center relative z-10">
            <svg className="w-8 h-8 text-white transform -rotate-45 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        )}
      </div>

      <div onClick={RedirectToToki} className={`${isMobile ? 'w-[33%]' : 'w-[33%]'} relative flex ${isMobile ? 'justify-center' : 'justify-between'} items-center h-full ${isMobile ? 'py-2 px-2' : 'py-4 px-6'} rounded-lg cursor-pointer group container-2 overflow-hidden`}>
        {/* Arka plan işyeri ikonu - sağda */}
        <div className={`absolute ${isMobile ? 'right-2' : 'right-8'} top-1/2 -translate-y-1/2 opacity-20`}>
          <svg className={`${isMobile ? 'w-16 h-16' : 'w-32 h-32'}`} fill="none" stroke="rgba(0,0,0,0.6)" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
          </svg>
        </div>
        <div className="flex flex-col relative z-10">
          <p className={`${isMobile ? 'text-sm' : 'text-xl'} md:font-normal font-bold`}>İlk İşyerim</p>
          {isMobile ? (
            <p className="text-xs opacity-70">Başvuru</p>
          ) : (
            <div className="flex gap-2 items-center">   
              <img width="26" height="10" src="https://img.icons8.com/fluency-systems-regular/ffffff/48/web-apps.png" alt="web-apps"/> 
              <p className="text-md">Başvuru</p> 
            </div>
          )}
        </div>
        {!isMobile && (
          <div className="flex items-center justify-center relative z-10">
            <svg className="w-8 h-8 text-white transform -rotate-45 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        )}
      </div>

      <div onClick={RedirectToToki} className={`${isMobile ? 'w-[33%]' : 'w-[33%]'} relative flex ${isMobile ? 'justify-center' : 'justify-between'} items-center h-full ${isMobile ? 'py-2 px-2' : 'py-4 px-6'} rounded-lg cursor-pointer group container-3 overflow-hidden`}>
        {/* Arka plan arsa ikonu - sağda */}
        <div className={`absolute ${isMobile ? 'right-2' : 'right-8'} top-1/2 -translate-y-1/2 opacity-20`}>
          <svg className={`${isMobile ? 'w-16 h-16' : 'w-32 h-32'}`} fill="none" stroke="rgba(0,0,0,0.5)" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h11.25c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
          </svg>
        </div>
      
        <div className="flex flex-col  relative z-10">
          <p className={`${isMobile ? 'text-sm' : 'text-xl'} md:font-normal font-bold`}>İlk Evim Arsa</p>
          {isMobile ? (
            <p className="text-xs opacity-70">Başvuru</p>
          ) : (
            <div className="flex gap-2 items-center">   
              <img width="26" height="10" src="https://img.icons8.com/fluency-systems-regular/ffffff/48/web-apps.png" alt="web-apps"/> 
              <p className="text-md">Başvuru</p> 
            </div>
          )}
        </div>
        {!isMobile && (
          <div className="flex items-center justify-center relative z-10">
            <svg className="w-8 h-8 text-white transform -rotate-45 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        )}
      </div>
      
    

    </div>

</div>
  );
}
