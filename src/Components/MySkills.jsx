import React, { useState } from "react";
import Flutter from "../assets/flutter.png";
import Java from "../assets/java.png";
import Kotlin from "../assets/kotlin.png";
import Swift from "../assets/swift.png";
import AppStoreOptimization from "../assets/app-store.png";
import Dart from "../assets/dart.png";

const MySkills = () => {
  const [skills, setSkills] = useState([
    { name: "Flutter", icon: Flutter },
    { name: "Java", icon: Java },
    { name: "Kotlin", icon: Kotlin },
    { name: "Swift", icon: Swift },
    { name: "App Store Optimization", icon: AppStoreOptimization },
    { name: "Dart", icon: Dart },
  ]);
  return (
    <section className="mt-4 w-full text-white">
      <h1 className="text-5xl font-semibold text-[#63C8D2] text-center">
        MY SKILLS
      </h1>
      <div className="mt-6 skills flex items-center justify-center flex-wrap gap-6">
        {skills.map((skill, i) => (
          <div className="skill w-70 h-40 flex flex-col gap-4 items-center justify-center  border border-[#63C8D2] transition-all cursor-pointer rounded-lg hover:bg-[#63C8D2]">
            <div className="image-container w-20 h-20">
              <img src={skill.icon} alt="" />
            </div>
            <h1 className="text-xl font-semibold">{skill.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
