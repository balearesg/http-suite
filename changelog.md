1.0.2: In version 1.0.2 of the @bgroup/http-suite package, two significant modifications have been made to improve
functionality and user experience:

1. flexibility in DELETE requests: previously, sending a body ('body') in DELETE requests was mandatory. Now, with the
   update to version 1.0.2, we have made this requirement optional. This provides greater flexibility to the user when
   making DELETE requests.

2. In previous versions, In version 1.0.2, we have introduced a change so that the body of PUT requests can arrive
   without problems, before this did not happen, it only happened with POST requests.
