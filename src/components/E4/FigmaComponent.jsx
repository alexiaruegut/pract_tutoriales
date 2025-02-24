const FigmaComponent = () => {
    return (
      <div className="bg-white bg-opacity-15 shadow-lg rounded-xl p-4 text-center w-full max-w-[600px] mx-auto">
        <div className="relative bg-[#e7e8ea] overflow-hidden w-full h-auto p-4">
          <div className="text-center text-[#ee3299] text-[20px] sm:text-[32px] font-bold font-['Montserrat'] leading-7">
            TUTORIALES DAREZ
          </div>
          <div className="text-black text-xs sm:text-sm font-medium font-['Montserrat'] leading-7 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta tortor eu erat laoreet, tristique laoreet nunc ultricies. Aenean tempus magna sapien, tincidunt porttitor erat maximus at.
          </div>
          <div className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] mt-3 bg-[#ee3299] rounded-full mx-auto" />
          <div className="text-black text-md sm:text-[20px] font-bold font-['Montserrat'] leading-7 mt-2">
            ALEXIA RUEDA
          </div>
          <div className="text-black/30 text-[6px] sm:text-xs font-bold font-['Montserrat'] leading-7 mt-2">
            Pixabay - @yeiferr
          </div>
          <div
            className="w-full h-[150px] sm:h-[250px] mt-3 bg-cover bg-center"
            style={{ backgroundImage: "url('computer.jpg')" }}
          />
          <div className="w-[70%] sm:w-[320px] h-[35px] sm:h-[45px] p-2.5 mt-5 bg-[#ee3299]/20 rounded-[25px] shadow-md flex justify-center items-center mx-auto">
            <div className="text-[#ee3299] text-md sm:text-[20px] font-bold font-['Montserrat'] leading-7">
              EMPECEMOS
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-5">
            {["E1", "E2", "E3", "E4"].map((item, index) => (
              <div key={index} className="w-[35px] sm:w-[45px] h-[35px] sm:h-[45px] p-2 bg-[#ee3299]/20 rounded-full shadow-md flex justify-center items-center">
                <div className="text-[#ee3299] text-md sm:text-[20px] font-bold font-['Montserrat'] leading-7">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default FigmaComponent;