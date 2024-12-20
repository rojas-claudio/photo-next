import "./globals.css"
import Gallery from "../components/gallery/page";
import Sidebar from "../components/sidebar";
import { TagProvider } from "@/components/TagProvider";

export default function Home() {
  return (
        <TagProvider>
          <div className={`flex flex-col lg:flex-row h-screen antialiased`}>

            <div className="w-full lg:h-full lg:w-1/6 lg:fixed">
              <Sidebar />
            </div>

            <div className="w-full lg:w-5/6 lg:ml-auto">
              <div>
                <Gallery/>
              </div>
            </div>

          </div>        
        </TagProvider>
  );
}
