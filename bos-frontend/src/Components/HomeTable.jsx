import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const HomeTable = () => {
  const data = useSelector((e) => e.setAllProduct);
  const navigate = useNavigate();
  return (
    data &&
    data.map((e, i) => {
      return (
        <tr
          role="button"
          onClick={() => navigate(`/listing/${e._id}`)}
          key={e._id}
        >
          <td scope="col">{i + 1}</td>
          <td scope="col">{e.Name}</td>
          <td scope="col">{e.City}</td>
          <td scope="col">{e.Address}</td>
          <td scope="col">{e.Capacity} kg </td>
          <td scope="col">₹ {e.Cost}</td>
          <td scope="col">{e.Verified}</td>
          <td scope="col">{e.Rating}</td>
        </tr>
      );
    })
  );
};
