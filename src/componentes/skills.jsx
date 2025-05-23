import React from 'react'

export const Skills = () => {
  return (
    <section id="skills" className="section">
    <h3 className="tit  text-center ">Skills</h3>
      <div className="card flex flex-row  justify-center">
        <div class="targetas mb-4 ">
          <div class="flex justify-end px-4 pt-2"></div>
          <div class="flex flex-col items-center pb-2">
            <div class="flex items-center justify-center w-32 h-32 mb-3 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-[#a1e2d4]">
              <i class="fa-solid fa-database text-gray-900 text-4xl"></i>
            </div>
            <h5 class="textC   mb-3 text-xl font-['Cinzel_Decorative'] font-bold text-gray-900   ">
              base de datos 
            </h5>
            <span class=" text-center  ">
            Gestión y optimización de bases de datos, garantizando la calidad y eficiencia en cada etapa del proceso. 
            </span>
          </div>
        </div>

        <div class="targetas mb-4 ">
          <div class="flex justify-end px-4 pt-2"></div>
          <div class="flex flex-col items-center pb-2">
            <div class="flex items-center justify-center w-32 h-32 mb-3 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-[#a1e2d4]">
              <i class="fa-solid fa-code text-gray-900 text-4xl"></i>
            </div>
            <h5 class=" textC mb-3 text-xl font-medium text-gray-900 ">
              backend
            </h5>
            <span class=" text-center   ">
            limplementacion de la logica en el analisis y ejecucion del software, aplicando buenas practicas de desarrollo
            </span>
          </div>
        </div>


        <div class="targetas mb-4 ">
          <div class="flex justify-end px-4 pt-2"></div>
          <div class="flex flex-col items-center pb-2">
            <div class="flex items-center justify-center w-32 h-32 mb-3 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-[#a1e2d4]">
              <i class="fa-solid fa-brush text-gray-900 text-4xl"></i>
            </div>
            <h5 class=" textC  mb-3 text-xl font-medium text-gray-900 ">
            front-end
            </h5>
            <span class=" text-center  ">
            diseño con enfoque responsivo, orientado a la máxima calidad y optimización del aplicativo
            </span>
          </div>
        </div>
        <div class="targetas mb-4 ">
          <div class="flex justify-end px-4 pt-2"></div>
          <div class="flex flex-col items-center pb-2">
            <div class="flex items-center justify-center w-32 h-32 mb-3 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-[#a1e2d4]">
              <i class="fa-solid fa-users-line text-gray-900 text-4xl"></i>
            </div>
            <h5 class=" textC  mb-3 text-xl font-medium text-gray-900 ">
              metodologias agiles
            </h5>
            <span class=" text-center    ">
            uso de metodologías ágiles y trabajo en equipo, asegurando entregas continuas de resultados de alta calidad.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}