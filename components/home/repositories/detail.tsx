import SkeletonTable from "@/components/common/skeleton/skeletonTable";
import ModalComponent from "@/components/modal";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useFetch } from "use-http";

interface props {
  link: string;
}

const DetailRepositories: React.FC<props> = ({ link }) => {
  const { get } = useFetch(link);
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState<number>(1);

  const handleDetail = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (open == true && link) {
      setLoading(true);
      get(`?page=${page}&per_page=10`).then((res) => {
        if (
          res?.incomplete_results == true ||
          res?.incomplete_results == false
        ) {
          setData(res);
          setLoading(false);
        } else if (res?.message) {
          toast.error(res?.message);
          setLoading(false);
        }
      });
    }
  }, [link, open, page]);

  const handleBack = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <ModalComponent isOpen={open} setIsOpen={setOpen}>
        <div>
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="bg-blue-200">
                <th className="py-4 pl-16">Pengguna</th>
                <th className="p-4">Nama Repo</th>
                <th className="p-4 ">Visibilitas</th>
                <th className="p-4 ">Alamat Repo</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <SkeletonTable />
              ) : (
                data?.map((row: any, ind: number) => (
                  <tr key={ind} className={ind % 2 == 1 ? "bg-blue-50" : ""}>
                    <td className="py-4 pl-16">{row?.owner?.login}</td>
                    <td className="p-4">{row?.full_name}</td>
                    <td className="p-4">{row?.visibility}</td>
                    <td className="p-4 text-ellipsis overflow-hidden">
                      <a
                        href={row?.html_url}
                        target="_blank"
                        className="underline  text-blue-500"
                      >
                        <p className="text-ellipsis overflow-hidden">
                          {row?.html_url}
                        </p>
                      </a>
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
      </ModalComponent>

      <button
        className="flex rounded-full text-slate-300 font-medium hover:bg-blue-300 hover:text-slate-700 transition duration-500 bg-[#3a7aba] px-8 py-2"
        onClick={handleDetail}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>

        <p className="pl-4 font-sans font-semibold">Lihat Detail</p>
      </button>
    </div>
  );
};

export default DetailRepositories;
