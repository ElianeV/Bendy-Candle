function Totaltime({ totalStretchTime }) {
  return (
    <div>
      <p>
        Total time:{" "}
        {Math.floor(totalStretchTime / 60) +
          "min " +
          (totalStretchTime % 60) +
          "s"}
      </p>
    </div>
  );
}

export default Totaltime;
