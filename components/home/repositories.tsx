import React, { useState, useEffect } from "react";
import useFetch from "use-http";
import TableUser from "./tableUser";

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
    get(
      `/search/users?q=${filter ?? `""`}&per_page=${limit}&page=${page}`
    ).then((res) => {
      if (res) {
        setListUser(res?.items);
        setTotal(res?.total_count);
        setLoading(false);
      } else if (res?.incomplete_results == false) {
        setLoading(false);
      }
    });
  }, [limit, page, filter]);

  return (
    <div>
      <input />
      <TableUser
        listUser={listUser}
        limit={limit}
        page={page}
        setLimit={setLimit}
        setPage={setPage}
        total={total}
      />
    </div>
  );
};

export default Repositories;
