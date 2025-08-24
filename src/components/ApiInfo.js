import React, { useState, useEffect } from 'react';

const ApiInfo = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = 'https://closecircle-d9gxf0f7bxbgbhcs.westus3-01.azurewebsites.net';

  useEffect(() => {
    fetchApiInfo();
  }, []);

  const fetchApiInfo = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${API_BASE_URL}/api/info`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setApiData(data);
    } catch (err) {
      console.error('API 호출 중 오류 발생:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchApiInfo();
  };

  if (loading) {
    return (
      <div className="api-info">
        <h3>🔍 API 정보 로딩 중...</h3>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="api-info error">
        <h3>❌ API 호출 오류</h3>
        <p className="error-message">{error}</p>
        <button onClick={handleRefresh} className="retry-button">
          다시 시도
        </button>
      </div>
    );
  }

  return (
    <div className="api-info">
      <div className="api-header">
        <h3>🌐 백엔드 API 정보</h3>
        <button onClick={handleRefresh} className="refresh-button">
          🔄 새로고침
        </button>
      </div>
      
      <div className="api-content">
        {apiData && (
          <div className="api-data">
            <div className="data-item">
              <strong>환경:</strong> 
              <span className={`environment ${apiData.environment}`}>
                {apiData.environment}
              </span>
            </div>
            <div className="data-item">
              <strong>메시지:</strong> 
              <span className="message">{apiData.message}</span>
            </div>
            <div className="data-item">
              <strong>타임스탬프:</strong> 
              <span className="timestamp">
                {new Date(apiData.timestamp).toLocaleString('ko-KR')}
              </span>
            </div>
          </div>
        )}
      </div>
      
      <div className="api-footer">
        <p className="api-url">
          <strong>API URL:</strong> {API_BASE_URL}/api/info
        </p>
      </div>
    </div>
  );
};

export default ApiInfo;
