import Image from "next/image";
import React from "react";

const DescriptionComponent: React.FC = () => {
  return (
    <div className=" bg-white1 px-32">
      <div className="py-16 flex items-center">
        <Image
          alt="github"
          src={"/img/github_image.png"}
          height={300}
          width={300}
        />
        <div className="ml-4">
          <p className="text-justify indent-8">
            <a
              className="font-bold"
              href={"https://github.com/"}
              target="_blank"
            >
              GitHub
            </a>{" "}
            adalah platform pengembangan perangkat lunak berbasis web yang
            memungkinkan pengguna untuk menyimpan, mengelola, dan berbagi kode
            sumber secara online. GitHub digunakan oleh para pengembang
            perangkat lunak untuk berkolaborasi pada proyek-proyek open-source
            maupun proyek-proyek swasta. Platform ini juga menawarkan
            fitur-fitur seperti pelacakan perubahan kode, manajemen tugas, dan
            integrasi dengan berbagai alat pengembangan perangkat lunak. Selain
            itu, GitHub juga menawarkan fitur sosial seperti forum diskusi,
            profil pengguna, dan fitur pencarian kode sumber. GitHub merupakan
            salah satu platform yang paling populer untuk pengembangan perangkat
            lunak dan digunakan oleh banyak organisasi besar dan kecil di
            seluruh dunia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionComponent;
