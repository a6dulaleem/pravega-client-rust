(function() {var implementors = {};
implementors["pravega_client_rust"] = [{"text":"impl Unpin for ByteStreamWriter","synthetic":true,"types":[]},{"text":"impl Unpin for ByteStreamReader","synthetic":true,"types":[]},{"text":"impl Unpin for ClientFactory","synthetic":true,"types":[]},{"text":"impl&lt;__T0&gt; Unpin for AuthTokenExpired&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for GetConnectionFromPool","synthetic":true,"types":[]},{"text":"impl Unpin for WriteRequest","synthetic":true,"types":[]},{"text":"impl Unpin for ReadReply","synthetic":true,"types":[]},{"text":"impl&lt;__T0, __T1&gt; Unpin for IncompatibleVersion&lt;__T0, __T1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T1: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for SendToProcessor","synthetic":true,"types":[]},{"text":"impl&lt;__T0, __T1&gt; Unpin for EventSizeTooLarge&lt;__T0, __T1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T1: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for ParseToEventCommand","synthetic":true,"types":[]},{"text":"impl Unpin for SegmentWriting","synthetic":true,"types":[]},{"text":"impl&lt;__T0&gt; Unpin for RetryControllerWriting&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;__T0&gt; Unpin for RetryConnectionPool&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;__T0&gt; Unpin for RetryRawClient&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;__T0, __T1&gt; Unpin for WrongReply&lt;__T0, __T1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T1: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;__T0&gt; Unpin for WrongHost&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;__T0&gt; Unpin for ReactorClosed&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;__T0&gt; Unpin for PingerError&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for TxnStreamControllerError","synthetic":true,"types":[]},{"text":"impl&lt;__T0&gt; Unpin for TxnSegmentWriterError&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for TxnStreamWriterError","synthetic":true,"types":[]},{"text":"impl&lt;__T0&gt; Unpin for TxnClosed&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for TxnControllerError","synthetic":true,"types":[]},{"text":"impl&lt;__T0, __T1&gt; Unpin for TxnCommitError&lt;__T0, __T1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T1: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;__T0, __T1&gt; Unpin for TxnAbortError&lt;__T0, __T1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T1: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;__T0&gt; Unpin for Cbor&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;__T0&gt; Unpin for SyncTableError&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;__T0&gt; Unpin for SyncUpdateError&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;__T0&gt; Unpin for SyncTombstoneError&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for RawClientError","synthetic":true,"types":[]},{"text":"impl Unpin for SegmentWriterError","synthetic":true,"types":[]},{"text":"impl Unpin for TransactionalEventStreamWriterError","synthetic":true,"types":[]},{"text":"impl Unpin for TransactionError","synthetic":true,"types":[]},{"text":"impl Unpin for SerdeError","synthetic":true,"types":[]},{"text":"impl Unpin for SynchronizerError","synthetic":true,"types":[]},{"text":"impl Unpin for EventReader","synthetic":true,"types":[]},{"text":"impl Unpin for ReaderState","synthetic":true,"types":[]},{"text":"impl Unpin for EventStreamWriter","synthetic":true,"types":[]},{"text":"impl Unpin for ClientMetrics","synthetic":true,"types":[]},{"text":"impl Unpin for ReaderGroup","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for RawClientImpl&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for ReaderGroupState","synthetic":true,"types":[]},{"text":"impl Unpin for Offset","synthetic":true,"types":[]},{"text":"impl Unpin for ReaderGroupStateError","synthetic":true,"types":[]},{"text":"impl Unpin for ReaderGroupConfig","synthetic":true,"types":[]},{"text":"impl Unpin for ReaderGroupConfigBuilder","synthetic":true,"types":[]},{"text":"impl Unpin for SegmentMetadataClient","synthetic":true,"types":[]},{"text":"impl Unpin for SegmentMetadataClientError","synthetic":true,"types":[]},{"text":"impl Unpin for AsyncSegmentReaderImpl","synthetic":true,"types":[]},{"text":"impl Unpin for ReaderError","synthetic":true,"types":[]},{"text":"impl Unpin for Event","synthetic":true,"types":[]},{"text":"impl Unpin for SegmentSlice","synthetic":true,"types":[]},{"text":"impl Unpin for SliceMetadata","synthetic":true,"types":[]},{"text":"impl Unpin for SegmentDataBuffer","synthetic":true,"types":[]},{"text":"impl Unpin for TableSynchronizer","synthetic":true,"types":[]},{"text":"impl Unpin for Key","synthetic":true,"types":[]},{"text":"impl Unpin for Value","synthetic":true,"types":[]},{"text":"impl Unpin for Table","synthetic":true,"types":[]},{"text":"impl Unpin for TableMap","synthetic":true,"types":[]},{"text":"impl Unpin for TableError","synthetic":true,"types":[]},{"text":"impl Unpin for Transaction","synthetic":true,"types":[]},{"text":"impl Unpin for TransactionalEventStreamWriter","synthetic":true,"types":[]}];
implementors["server_cli"] = [{"text":"impl Unpin for Opt","synthetic":true,"types":[]},{"text":"impl Unpin for Command","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()