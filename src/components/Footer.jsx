export default function Footer({ showModal, handleToggleModal, data }) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div id="fd">
        <div>
        <h2>{data?.title}</h2>
        <h1>IMAGE COPYRIGHT: {data?.copyright}</h1>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
      </div>
    </footer>
  );
}
