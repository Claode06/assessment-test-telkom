import React, { useState, useEffect } from "react";
import DetailRepositories from "./repositories/detail";
import SkeletonTable from "../common/skeleton/skeletonTable";
import Image from "next/image";

interface props {
  limit: number;
  page: number;
  total: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  listUser: {
    id: number;
    login: string;
    avatar_url: string;
    repos_url: string;
  }[];
  loading?: boolean;
}

const TableUser: React.FC<props> = ({
  limit,
  listUser,
  page,
  setLimit,
  setPage,
  total,
  loading,
}) => {
  const handleBack = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };
  return (
    <div className="w-full mt-2">
      <table className="table-fixed w-full text-left">
        <thead>
          <tr className="bg-blue-200">
            <th className="py-4 pl-16">Profil</th>
            <th className="p-4">ID User</th>
            <th className="p-4 ">Nama User</th>
            <th className="p-4 ">Repositori</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <SkeletonTable />
          ) : (
            listUser?.map((row: any, ind: number) => (
              <tr key={ind} className={ind % 2 == 1 ? "bg-blue-50" : ""}>
                <td className="py-4 pl-16">
                  <div className="rounded-full">
                    <Image
                      className="rounded-full"
                      src={row?.avatar_url}
                      width={40}
                      height={40}
                      alt="img"
                      placeholder="blur"
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                </td>
                <td className="p-4">{row.id}</td>
                <td className="p-4">{row?.login}</td>
                <td className="p-4">
                  <DetailRepositories link={row?.repos_url} />
                </td>
              </tr>
            ))
          )}
          <tr className="bg-slate-500">
            <td className="p-4" colSpan={4}>
              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className="flex items-center text-slate-300 hover:text-slate-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                    />
                  </svg>
                  <p className="pl-2">Kembali</p>
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center text-slate-300 hover:text-slate-100"
                >
                  <p>Lanjut</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 ml-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableUser;
