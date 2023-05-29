import { useRef, useState } from "react";
import {
  useLabInference
} from "@tecmie/labdoc-sdk";


function Page() {
  const [page, setPage] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [doc, setdoc] = useState<File | null>(null);

  const { query } = useLabInference();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  // @ts-ignore
  // const inference = proxy.scanner.read.mutate();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // const { document, executeUpload } = usePDFParser({
  //   canvasRef,
  // });

  const handleSubmit = async () => {
    if (file) {
      // Create a blob URL from the uploaded file
      const blobUrl = URL.createObjectURL(file);

        // Call the inference method
  const diagnosis = await query({ documents: ["blood sugar"] });
  console.log({ doc, blobUrl, diagnosis });
      // const result = await inference.mutateAsync({
      //   diagnosis: ["reports"],
      // });;
      // eslint-disable-next-line no-console
      console.log(diagnosis, blobUrl);
    }
  };

  // const previousDisabled = page === 1;
  // const nextDisabled = Boolean(page === document?.numPages);

  return (
    <div>
      <div>
        <div>
          <h1>Hello Pagers</h1>

          <input type="file" onChange={handleFileChange} />
          <button onClick={() => handleSubmit()} type="button">
            Upload
          </button>

          {/* 
          <div className="text-xl text-gray-200 mt-4">
            The easiest way to render PDFs in React.{' '}
            <a
              href="https://bundlephobia.com/package/@mikecousins/react-pdf"
              className="text-blue-400"
            >
              Under 1kB in size.
            </a>{' '}
            Modern React hook architecture.
          </div> */}
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container text-center py-12 mx-auto flex">
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-center">
              <button
                // disabled={previousDisabled}
                onClick={() => setPage(page - 1)}
                className={"text-gray-300"}
              >
                {"<"}
              </button>
            </div>
          </div>
          <div>
            {doc ? (
              <div className="text-center">
                <canvas ref={canvasRef} />
              </div>
            ) : (
              <span>Loading...</span>
            )}
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-center">
              <button
                // disabled={nextDisabled}
                onClick={() => setPage(page + 1)}
                className={"text-gray-300"}
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
