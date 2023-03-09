import React, { useState, useEffect } from "react";

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
}

const TableUser: React.FC<props> = ({
  limit,
  listUser,
  page,
  setLimit,
  setPage,
  total,
}) => {
  useEffect(() => {
    if (listUser) {
      console.log(listUser);
    }
  }, [listUser]);
  return (
    <div className="w-full px-32 py-16">
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th>ID User</th>
            <th>Nama User</th>
            <th>Repositori</th>
          </tr>
        </thead>
        <tbody>
          {listUser?.map((row: any, key: number) => (
            <tr key={key}>
              <td>{row.id}</td>
              <td>{row?.login}</td>
              <td>
                <button>Lihat Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUser;
