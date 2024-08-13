import { useState, useEffect, useRef } from "react";
import SearchBar from "./components/SearchBar";
import Container from "./components/Container";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage";
import ImageModal from "./components/ImageModal";
import { toast, Toaster } from "react-hot-toast";
import { TbMoodLookRight } from "react-icons/tb";
import imagesAPI from "./services/images-api.js";

const App = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ url: "", desc: "" });

  const prevQueryRef = useRef();

  const { url, desc } = modalData;

  const handleSubmit = (query) => {
    setQuery(query);
    if (query !== prevQueryRef.current) {
      setPage(1);
      setItems([]);
    }
  };

  const handleLoadMoreButton = () => {
    setPage((prevState) => prevState + 1);
  };

  const smoothScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleOpenModal = (e) => {
    const { url, desc } = e.currentTarget.dataset;
    setIsModalOpen(true);
    setModalData({ url, desc });
  };

  useEffect(() => {
    setShowButton(false);

    if (query === "") return;

    const prevQuery = prevQueryRef.current;
    setIsLoading(true);

    imagesAPI
      .fetchImages(query, page)
      .then(function (response) {
        const items = response.data.results;
        if (items.length === 0) {
          if (prevQuery !== query) {
            return toast.success("There no images. Enter another query.", {
              icon: <TbMoodLookRight />,
            });
          } else {
            return toast.success("There no more images. Enter new query.", {
              icon: <TbMoodLookRight />,
            });
          }
        }

        if (items.length === imagesAPI.PER_PAGE) {
          setShowButton(true);
        }

        setItems((prevState) => [...prevState, ...items]);

        if (page !== 1) {
          setTimeout(() => smoothScroll(), 0);
        }

        prevQueryRef.current = query;
        setError(null);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <Container>
        {items.length > 0 && (
          <ImageGallery items={items} openModal={handleOpenModal} />
        )}
        {error && <ErrorMessage text={error.message} />}
        {isLoading && <Loader />}
        {showButton && !isLoading && (
          <LoadMoreBtn onClick={handleLoadMoreButton} />
        )}
      </Container>
      <ImageModal
        isOpen={isModalOpen}
        url={url}
        desc={desc}
        onClose={() => setIsModalOpen(false)}
      />

      <Toaster
        toastOptions={{
          duration: 3000,
          position: "top-right",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
        }}
      />
    </>
  );
};

export default App;
