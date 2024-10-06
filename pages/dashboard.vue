<template>
  <div class="relative min-h-screen bg-cover bg-center overflow-hidden fixed inset-0" style="background: linear-gradient(to bottom right, #4B0082, #8A2BE2, #9370DB, #DA70D6);">
    <div class="fixed inset-0 flex items-center justify-center z-0">
      <div class="animated-planets">
        <div v-for="i in 15" :key="i" class="planet" :style="{ '--planet-color': getRandomPlanetColor(), '--size': getRandomSize() + 'px', '--left-position': getRandomPosition() + '%' }"></div>
      </div>
    </div>

    <!-- Navbar -->
    <nav
        class="bg-black bg-opacity-70 py-4 px-4 md:py-6 md:px-8 flex justify-between items-center relative z-10 backdrop-blur-md border-b border-purple-600/50">
        <!-- Logo -->
        <NuxtLink to="/" class="text-2xl md:text-3xl font-bold text-[rgb(201_183_217)]">ASTROLABS</NuxtLink>

        <!-- Navbar Links (Hidden on smaller screens) -->
        <div class="hidden md:flex space-x-6 rounded-lg bg-white/10 backdrop-none-md py-2 px-6">
          <NuxtLink to="/" class="text-[rgb(201_183_217)] hover:text-purple-300 font-bold">Home</NuxtLink>
          <NuxtLink to="/about" class="text-[rgb(201_183_217)] hover:text-purple-300 font-bold">About</NuxtLink>
        </div>

        <!-- Orrery Button -->
        <div class="flex items-center space-x-4">
          <a href="/eye"
            class="border border-purple-600 bg-transparent text-white font-bold py-2 px-4 md:px-6 rounded-lg shadow-lg hidden md:inline-block">
            Orrery
          </a>
        </div>

        <!-- Hamburger Menu (Visible on smaller screens) -->
        <button @click="showMenu = !showMenu" class="md:hidden focus:outline-none" :class="{ 'bg-purple-600 text-white': showMenu }">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- Mobile Menu (Shown/Hidden based on showMenu state) -->
        <div v-if="showMenu" class="absolute top-full md:hidden bg-black bg-opacity-70 px-4 py-4 rounded-lg shadow-md border border-[#c9b7d9] z-50">
          <NuxtLink to="/" class="block text-white hover:text-purple-300 mb-2">Home</NuxtLink>
          <NuxtLink to="/about" class="block text-white hover:text-purple-300 mb-2">About</NuxtLink>
        </div>

        <!-- Flowing purple border with glow -->
        <div
          class="absolute bottom-0 left-0 w-full h-[0.125rem] bg-gradient-to-r from-purple-600 via-purple-400 to-transparent animate-glow-flow">
        </div>
      </nav>

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold my-4 md:my-8 text-[#c9b7d9]">Dashboard</h1>

      <div class="bg-black bg-opacity-70 p-4 md:p-6 rounded-lg shadow-md border border-[#c9b7d9] mb-6 md:mb-8">
        <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-[#c9b7d9] mb-2 md:mb-4">Choose a Method to Load Data</h2>

        <div class="flex flex-col space-y-2 md:space-y-4">
          <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-4">
            <button @click="usePredefinedData('m1')" class="bg-[#c9b7d9] text-black font-bold py-2 px-4 rounded hover:bg-[#8a68ad]">Example 1</button>
            <button @click="usePredefinedData('m2')" class="bg-[#c9b7d9] text-black font-bold py-2 px-4 rounded hover:bg-[#8a68ad]">Example 2</button>
            <button @click="usePredefinedData('m3')" class="bg-[#c9b7d9] text-black font-bold py-2 px-4 rounded hover:bg-[#8a68ad]">Example 3</button>
          </div>

          <div class="mt-2 md:mt-4">
            <h2 class="text-sm md:text-xl lg:text-2xl font-bold text-[#c9b7d9] mb-2 md:mb-4">OR Upload File:</h2>
            <div
              class="upload-area flex flex-col items-center justify-center border-2 border-dashed border-gray-500 rounded-lg p-4 md:p-6 cursor-pointer"
              @dragover.prevent
              @drop.prevent="onDrop"
            >
              <input type="file" ref="fileInput" class="hidden" @change="onFileSelected" accept=".txt">
              <i class="fas fa-cloud-upload-alt text-2xl md:text-3xl lg:text-4xl text-gray-400 mb-2 md:mb-4"></i>
              <p v-if="!uploadedFile" class="text-gray-400 text-xs md:text-sm">Drag & Drop .txt files here or <span class="text-purple-300 hover:underline cursor-pointer" @click="selectFile">Browse</span></p>
              <p v-else-if="uploadError" class="text-red-500 text-xs md:text-sm">{{ uploadError }}</p>
              <p v-else class="text-[#c9b7d9] text-xs md:text-sm">Uploaded: {{ uploadedFile.name }}</p>
            </div>
            <button @click="submitFile" class="mt-2 md:mt-4 bg-[#c9b7d9] text-black font-bold py-2 px-4 rounded hover:bg-[#8a68ad]">Submit</button>
          </div>
        </div>
      </div>

      <div v-if="responseData && isValidResponse(responseData)" class="bg-black bg-opacity-70 p-4 md:p-6 rounded-lg shadow-md border border-[#c9b7d9] mb-6 md:mb-8">
        <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-[#c9b7d9] mb-2 md:mb-4">Response Data</h2>
        <div v-if="responseData.title" class="mb-2 md:mb-4 text-[#c9b7d9]">
          <strong class="text-sm md:text-xl lg:text-2xl">Title:</strong> {{ responseData.title }}
        </div>
        <div v-if="responseData.description" class="mb-2 md:mb-4 text-[#c9b7d9]">
          <strong class="text-sm md:text-xl lg:text-2xl">Description:</strong> {{ responseData.description }}
        </div>
        <div v-if="responseData.summary" class="mb-2 md:mb-4 text-[#c9b7d9]">
          <strong class="text-sm md:text-xl lg:text-2xl">Summary:</strong> {{ responseData.summary }}
        </div>

        <!-- Display Subject Details Table -->
        <div v-if="responseData.subject_details" class="mb-2 md:mb-4">
          <h3 class="text-sm md:text-xl lg:text-2xl font-bold text-[#c9b7d9] mb-2">Subject Details</h3>
          <table class="w-full text-[#c9b7d9]">
            <tr v-for="(value, key) in responseData.subject_details" :key="key">
              <td class="font-bold text-xs md:text-sm">{{ key }}:</td>
              <td class="text-xs md:text-sm">{{ value }}</td>
            </tr>
          </table>
        </div>

        <!-- Display Experiment Details Table -->
        <div v-if="responseData.experiment_details" class="mb-2 md:mb-4">
          <h3 class="text-sm md:text-xl lg:text-2xl font-bold text-[#c9b7d9] mb-2">Experiment Details</h3>
          <table class="w-full text-[#c9b7d9]">
            <tr v-for="(value, key) in responseData.experiment_details" :key="key">
              <td class="font-bold text-xs md:text-sm">{{ key }}:</td>
              <td class="text-xs md:text-sm">{{ value }}</td>
            </tr>
          </table>
        </div>

        <!-- Display Additional Information Table -->
        <div v-if="responseData.additional_information" class="mb-2 md:mb-4">
          <h3 class="text-sm md:text-xl lg:text-2xl font-bold text-[#c9b7d9] mb-2">Additional Information</h3>
          <table class="w-full text-[#c9b7d9]">
            <tr v-for="(value, key) in responseData.additional_information" :key="key">
              <td class="font-bold text-xs md:text-sm">{{ key }}:</td>
              <td class="text-xs md:text-sm">{{ value }}</td>
            </tr>
          </table>
        </div>

        <!-- Display Graphs -->
        <div v-if="responseData.graphs">
          <h3 class="text-sm md:text-xl lg:text-2xl font-bold text-[#c9b7d9] mb-2">Graphs</h3>
          <div v-for="(graphData, graphName) in responseData.graphs" :key="graphName" class="mb-2 md:mb-4">
            <p class="text-[#c9b7d9] font-bold text-xs md:text-sm">{{ graphName }}</p>
            <img :src="'data:image/png;base64,' + graphData" alt="Graph" class="max-w-full h-auto">
          </div>
        </div>

        <div class="flex space-x-2 md:space-x-4 mt-2 md:mt-4">
          <button @click="generatePDF" v-if="isResponseReady" class="bg-[#c9b7d9] text-black font-bold py-2 px-4 rounded hover:bg-[#8a68ad]">Generate PDF</button>
          <button @click="downloadAudio" v-if="isResponseReady && responseData.audio_base64" class="bg-[#c9b7d9] text-black font-bold py-2 px-4 rounded hover:bg-[#8a68ad]">Download Audio</button>
        </div>
      </div>
    </div>

        <!-- Footer -->
        <footer class="bg-black bg-opacity-70 text-[rgb(201_183_217)] pt-4 md:pt-10 pb-4 md:pb-6 relative">
        <div class="container mx-auto px-4 md:px-6">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-2 md:mb-4">
              <p class="text-center md:text-left text-xs md:text-sm">© 2024 Astrolabs. All rights reserved.</p>
            </div>
            <div class="flex space-x-2 md:space-x-4 justify-center md:justify-end">
              <a href="https://instagram.com" target="_blank" class="text-[rgb(201_183_217)] hover:text-gray-400">
                <i class="fab fa-instagram text-base"></i>
              </a>
              <a href="https://whatsapp.com" target="_blank" class="text-[rgb(201_183_217)] hover:text-gray-400">
                <i class="fab fa-whatsapp text-base"></i>
              </a>
              <a href="https://discord.com" target="_blank" class="text-[rgb(201_183_217)] hover:text-gray-400">
                <i class="fab fa-discord text-base"></i>
              </a>
            </div>
          </div>
          <div class="mt-4 md:mt-8 text-center text-xs md:text-sm">
            <p>Contact us: <a href="mailto:astrolabs@example.com" class="text-purple-400">astrolabs@example.com</a></p>
            <p>Privacy Policy | Terms of Service</p>
          </div>
        </div>
        <!-- Glowing border animation -->
        <div
          class="absolute top-0 left-0 w-full h-[0.125rem] bg-gradient-to-r from-purple-600 via-purple-400 to-transparent animate-glow-flow">
        </div>
      </footer>

  </div>
</template>

<script>
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
  data() {
    return {
      uploadedFile: null,
      uploadError: null,
      responseData: null,
      isLoading: false,
      isResponseReady: false,
      showMenu: false,
    };
  },
  mounted() {
  },
  methods: {
    selectFile() {
      this.$refs.fileInput.click();
    },
    onFileSelected(event) {
      const file = event.target.files[0];
      if (file && this.isValidFile(file)) {
        this.uploadedFile = file;
        this.uploadError = null;
      } else {
        this.uploadedFile = null;
        this.uploadError = 'Invalid file type. Please upload a .txt file.';
      }
    },
    onDrop(event) {
      const file = event.dataTransfer.files[0];
      if (file && this.isValidFile(file)) {
        this.uploadedFile = file;
        this.uploadError = null;
      } else {
        this.uploadedFile = null;
        this.uploadError = 'Invalid file type. Please upload a .txt file.';
      }
    },
    isValidFile(file) {
      return file.type === 'text/plain';
    },
    async submitFile() {
      this.isLoading = true;
      this.isResponseReady = false;

      if (!this.uploadedFile) {
        this.uploadError = 'No file selected.';
        this.isLoading = false;
        return;
      }

      const formData = new FormData();
      formData.append('metadata_file', this.uploadedFile);

      try {
        const response = await fetch('https://afnan-playground.koyeb.app/process_metadata', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          const message = `Error: ${response.status} ${response.statusText}`;
          throw new Error(message);
        }

        const data = await response.json();
        this.responseData = this.handleResponseData(data);
        this.uploadError = null;
        this.isResponseReady = true;
      } catch (error) {
        this.uploadError = 'Upload failed: ' + error.message;
        this.responseData = null;
        console.error('Error during file upload:', error);
      } finally {
        this.isLoading = false;
      }
    },
    async usePredefinedData(metadataId) {
      this.isLoading = true;
      this.isResponseReady = false;

      try {
        const response = await fetch(`https://afnan-playground.koyeb.app/${metadataId}`, {
          method: 'GET',
        });

        if (!response.ok) {
          const message = `Error: ${response.status} ${response.statusText}`;
          throw new Error(message);
        }

        const data = await response.json();
        this.responseData = this.handleResponseData(data);
        this.uploadError = null;
        this.isResponseReady = true;
      } catch (error) {
        this.uploadError = 'Failed to load predefined metadata: ' + error.message;
        this.responseData = null;
        console.error('Error during predefined data fetch:', error);
      } finally {
        this.isLoading = false;
      }
    },
    isValidResponse(response) {
      return response &&
             response.title !== undefined &&
             response.description !== undefined &&
             response.summary !== undefined;
    },
    getRandomPlanetColor() {
      const colors = ['#FDD57E', '#FFED97', '#FFE270', '#FFD700'];
      return colors[Math.floor(Math.random() * colors.length)];
    },
    getRandomDuration() {
      return Math.random() * 10 + 10;
    },
    getRandomDelay() {
      return Math.random() * 20;
    },
    getRandomSize() {
      return Math.random() * 50 + 30;
    },
    getRandomPosition() {
      return Math.random() * 100;
    },
    // Handle Data Type Conversion
    handleResponseData(data) {
      // Convert numeric fields as needed
      if (data.subject_details && data.subject_details.number_of_subjects) {
        data.subject_details.number_of_subjects = parseInt(data.subject_details.number_of_subjects, 10);
      }
      if (data.experiment_details && data.experiment_details.number_of_subjects) {
        data.experiment_details.number_of_subjects = parseInt(data.experiment_details.number_of_subjects, 10);
      }
      if (data.additional_information && data.additional_information.number_of_subjects) {
        data.additional_information.number_of_subjects = parseInt(data.additional_information.number_of_subjects, 10);
      }
      // Convert other numeric fields or arrays as required
      return data;
    },
    async generatePDF() {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      // Set default font size and styles
      doc.setFontSize(10);

      // Add title
      doc.setFontSize(18);
      doc.setTextColor(0, 0, 0); // Set text to black
      doc.text('Visual Space Science', 10, 20);

      let y = 30;

      // Add title, description, and summary
      if (this.responseData.title) {
        y = this.addTitleSection(doc, 'Title', this.responseData.title, y);
      }
      if (this.responseData.description) {
        y = this.addTitleSection(doc, 'Description', this.responseData.description, y);
      }
      if (this.responseData.summary) {
        y = this.addTitleSection(doc, 'Summary', this.responseData.summary, y);
      }

      // Add a new page for the tables
      doc.addPage();
      y = 20; // Reset y to the top of the new page

      // Add Subject Details table (modified)
      if (this.responseData.subject_details) {
        y = this.addKeyValueTableToPdf(doc, 'Subject Details', this.responseData.subject_details, y);
      }

      // Add Experiment Details table (modified)
      if (this.responseData.experiment_details) {
        y = this.addKeyValueTableToPdf(doc, 'Experiment Details', this.responseData.experiment_details, y);
      }

      // Add additional information table (modified)
      if (this.responseData.additional_information) {
        y = this.addKeyValueTableToPdf(doc, 'Additional Information', this.responseData.additional_information, y);
      }

      // Add a new page for the graphs
      doc.addPage();
      y = 20; // Reset y to the top of the new page

      // Add graphs (if any)
      if (this.responseData.graphs) {
        y = this.addGraphsToPdf(doc, 'Graphs', this.responseData.graphs, y);
      }

      // Save the PDF
      doc.save('report.pdf');
    },

    addTitleSection(doc, title, content, y) {
      doc.setFontSize(12);
      doc.text(title, 10, y);
      y += 5;

      doc.setFontSize(10);
      doc.text(content, 10, y, {
        maxWidth: 180,
        align: "left",
      });
      return y + 10;
    },
    addKeyValueTableToPdf(doc, title, data, y) {
      doc.setFontSize(12);
      doc.text(title, 10, y);
      y += 5;

      const columns = Object.keys(data);
      const rows = Object.entries(data).map(([key, value]) => [key, value]);

      doc.autoTable({
        head: [["Key", "Value"]],
        body: rows,
        startY: y,
        margin: { top: y },
        styles: {
          overflow: 'linebreak',
          cellPadding: 2,
          fontSize: 8,
          lineColor: [0, 0, 0],
          lineWidth: 0.2,
        },
        columnStyles: {
          0: {
            fontStyle: 'bold',
            cellWidth: 50,
          },
          1: {
            cellWidth: 140,
          }
        },
      });
      return doc.lastAutoTable.finalY + 5;
    },

    addTextToPdf(doc, label, value, y, fontSize) {
      doc.setFontSize(fontSize || 10);
      doc.text(label, 10, y);
      doc.setFontSize(8);
      // Convert value to string if it's a number
      doc.text(typeof value === 'number' ? value.toString() : value, 40, y, {
        maxWidth: 170,
        align: "left",
      });
      return y + 5;
    },

    addTableToPdf(doc, title, data, y) {
      doc.setFontSize(12);
      doc.text(title, 10, y);
      y += 5;

      const columns = Object.keys(data);
      const rows = Object.values(data).map((value) => [value]);

      doc.autoTable({
        head: [columns],
        body: rows,
        startY: y,
        styles: {
          overflow: 'linebreak',
          cellPadding: 2,
          fontSize: 8,
          lineColor: [0, 0, 0],
          lineWidth: 0.2,
        },
        columnStyles: {
          0: {
            fontStyle: 'normal',
          },
        },
      });

      return doc.lastAutoTable.finalY + 5;
    },

    addGraphsToPdf(doc, title, data, y) {
      doc.setFontSize(14);
      doc.text(title, 10, y);
      y += 5;

      // Calculate available width and height for each graph
      const availableWidth = doc.internal.pageSize.getWidth() - 20;
      const availableHeight = doc.internal.pageSize.getHeight() - y - 20;

      // Calculate the number of columns and rows based on graph count
      const numGraphs = Object.keys(data).length;
      const cols = 2;
      const rows = Math.ceil(numGraphs / cols);

      // Calculate the width and height for each graph cell
      const graphWidth = availableWidth / cols;
      const graphHeight = availableHeight / rows;

      // Iterate through graph data and add to PDF
      let colIndex = 0;
      let rowIndex = 0;
      for (const graphName in data) {
        const imgProps = doc.getImageProperties(data[graphName]);
        const aspectRatio = imgProps.width / imgProps.height;
        let graphImgWidth, graphImgHeight;

        // Resize graph to fit within the cell while maintaining aspect ratio
        if (graphWidth / aspectRatio > graphHeight) {
          graphImgWidth = graphHeight * aspectRatio;
          graphImgHeight = graphHeight;
        } else {
          graphImgWidth = graphWidth;
          graphImgHeight = graphWidth / aspectRatio;
        }

        const x = 10 + (colIndex * graphWidth);
        const graphY = y + (rowIndex * graphHeight);

        doc.addImage(data[graphName], 'PNG', x, graphY, graphImgWidth, graphImgHeight);

        colIndex++;
        if (colIndex >= cols) {
          colIndex = 0;
          rowIndex++;
        }
      }
      y += availableHeight + 10;
      return y;
    },
    downloadAudio() {
      if (this.responseData && this.responseData.audio_base64) {
        const link = document.createElement('a');
        link.href = `data:audio/mpeg;base64,${this.responseData.audio_base64}`;
        link.download = 'summary.mp3';
        link.click();
      } else {
        // Handle case where audio data is missing
        console.warn("Audio data not found in response.");
      }
    }
  }
};
</script>

<style scoped>
.animated-planets {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.planet {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background-color: var(--planet-color);
  border-radius: 50%;
  bottom: -100px;
  left: var(--left-position);
}

.planet::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(var(--size) * 1.5);
  height: calc(var(--size) * 1.5);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent 70%);
  z-index: -1;
}


/* Responsive Adjustments */
.container {
  max-width: 95%;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

table td {
  padding: 0.5rem 0.2rem;
  border: 1px solid #c9b7d9;
  color: #c9b7d9;
  font-size: 0.8rem;
  word-break: break-word;
}

/* Ensure title, description, and summary text is not black */
.text-[#c9b7d9] {
  color: #c9b7d9;
}

@media (max-width: 768px) {
  /* Adjust for smaller screens (tablets) */
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.6rem;
  }
  h3 {
    font-size: 1.4rem;
  }
  .upload-area {
    padding: 2rem 1rem;
  }
  .upload-area p {
    font-size: 1rem;
  }
}
@media (max-width: 480px) {
  /* Adjust for smaller screens (phones) */
  h1 {
    font-size: 1.8rem;
  }
  h2 {
    font-size: 1.4rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  .upload-area {
    padding: 1.5rem 0.5rem;
  }
  .upload-area p {
    font-size: 0.9rem;
  }
}
</style>
