// Use local proxy to avoid CORS issues
export const API_BASE_URL = '/api'

export const API_ENDPOINTS = {
  query: `${API_BASE_URL}/query`,  // Main chat endpoint
  upload: `${API_BASE_URL}/upload`,  // File upload endpoint
  health: `${API_BASE_URL}/health`,  // Health check endpoint
}

// API Types
export interface ChatResponse {
  agent_name?: string | null;
  agent_uid?: string | null;
  answer: string;
  confidence: number;
  sources: string[];
}

export interface ChatHistoryItem {
  question: string;
  chat_response: ChatResponse;
}

export interface UploadFileResponse {
  url: string;
}

export interface AssistantQueryBody {
  question: string;
  history?: ChatHistoryItem[] | null;
  minimum_confidence?: number | null;
  uploaded_documents?: UploadFileResponse[] | null;
}

// Test if the backend is accessible
export const testBackendConnection = async () => {
  try {
    const response = await fetch(API_ENDPOINTS.health, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      }
    });
    console.log('Health check status:', response.status);
    return response.ok;
  } catch (error) {
    console.error('Health check failed:', error);
    return false;
  }
};

export const fetchApi = async (endpoint: string, options: RequestInit = {}) => {
  try {
    console.log('Sending request to:', endpoint);
    console.log('Request body:', options.body);

    const response = await fetch(endpoint, {
      ...options,
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    console.log('Response received:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
    });

    const responseData = await response.json();
    console.log('Response data:', responseData);

    if (!response.ok) {
      throw new Error(
        responseData?.error || 
        responseData?.message || 
        `API call failed: ${response.status} ${response.statusText}`
      );
    }

    return responseData;
  } catch (error) {
    console.error('API call error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      endpoint,
      options
    });
    throw error;
  }
} 