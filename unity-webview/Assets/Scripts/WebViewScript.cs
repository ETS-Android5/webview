using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
#if UNITY_2018_4_OR_NEWER
using UnityEngine.Networking;
#endif

public class WebViewScript : MonoBehaviour
{

    public string Url = "https://secweb22-brokenbridge.github.io/";
    WebViewObject webViewObject;

    // Start is called before the first frame update
    void Start()
    {
        Screen.fullScreen = false;
        webViewObject = new GameObject("WebViewObject").AddComponent<WebViewObject>();
        webViewObject.Init(
            enableWKWebView: true,
            wkContentMode: 0);

        webViewObject.LoadURL(Url);
        webViewObject.SetVisibility(true);
    }

    // Update is called once per frame
    void Update()
    {
        // Returns to menu screen on back button press
        if (Application.platform == RuntimePlatform.Android)
        {
            if (Input.GetKeyDown(KeyCode.Escape))
            {
                SceneManager.LoadScene("MainScene");
            }
        }
    }
}
