# Purpose
We should start thinking about an enterprise dashboard so everybody can visually query the status of our services. CI tools already provides
a good dashboard for this purpose. If we structure our pings/tests in such a way that they work with CI tools, we can use a CI tool
as our enterprise dashboard.

It may be nice if we can use a hosted CI service, but there are internal APIs we want to test, and they need to be performed either via a
VPN or via a CI service sitting internally. (we can potentially migrate this to a hosted service once the Azure private line is set up)

This document is where I write down the steps I went through setting up Jenkins, so it can be easily replicated.
