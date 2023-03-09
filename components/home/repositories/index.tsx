import React, { useState, useEffect } from "react";
import useFetch from "use-http";
import TableUser from "../tableUser";
import { toast } from "react-toastify";

const Repositories: React.FC = () => {
  const { get } = useFetch("https://api.github.com");
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState<string>();
  const [listUser, setListUser] = useState<
    Array<{ id: number; login: string; avatar_url: string; repos_url: string }>
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    get(
      `/search/users?q=${filter ?? `""`}&per_page=${limit}&page=${page}`
    ).then((res) => {
      if (res?.incomplete_results == true || res?.incomplete_results == false) {
        setListUser(res?.items);
        setTotal(res?.total_count);
        setLoading(false);
      } else if (res?.message) {
        toast.error(res?.message);
        setLoading(false);
      }
    });
  }, [limit, page, filter]);

  const handleSearch = (e: any) => {
    setTimeout(() => {
      setFilter(e?.target?.value);
    }, 1000);
  };

  return (
    <div className="px-32 py-16">
      <div className="flex items-center ">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-blue-300 hover:text-blue-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <input
          onInput={handleSearch}
          type="search"
          className="border-2 focus:border-blue-200  w-1/2 ml-2 rounded-full py-4 px-8 focus:outline-none"
          placeholder="Cari Akun Github Anda . . ."
        />
      </div>
      <div className="flex justify-end items-center">
        <p className="font-semibold">Limit : </p>
        <select
          onInput={(e: any) => {
            setLimit(e?.target?.value);
          }}
          className="border border-blue-200 px-4 py-2 rounded-lg ml-2"
        >
          <option value={10} key={10}>
            10
          </option>
          <option value={20} key={20}>
            20
          </option>
          <option value={50} key={50}>
            50
          </option>
        </select>
      </div>
      <TableUser
        listUser={listUser}
        limit={limit}
        page={page}
        setLimit={setLimit}
        setPage={setPage}
        total={total}
        loading={loading}
      />
    </div>
  );
};

export default Repositories;
